import { Component, signal, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { Holiday } from '../model/holiday';
import { HolidayServiceService } from '../holiday-service/holiday-service.service';
import { HolidayTypeServiceService } from '../holiday-type-service/holiday-type-service.service';
import { HolidayType } from '../model/holiday-type';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from './add-event/add-event.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent {

  INITIAL_EVENTS: any[] = []

  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)

  });
  currentEvents = signal<EventApi[]>([]);

  constructor(private changeDetector: ChangeDetectorRef,public dialog: MatDialog, private holidayService: HolidayServiceService, private holidayTypeService: HolidayTypeServiceService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.holidayService.getHolidays().subscribe((data: Holiday[]) => {
     // let type: HolidayType 
      this.INITIAL_EVENTS = data.map(
        evt => {
          //this.holidayTypeService.getHolidayTypeById(evt.holidayType!).subscribe((data: HolidayType)=>{
          //  type = data
            
          //})
          return {
            id: evt.idHoliday,
            title: evt.statusHoliday,
            start: evt.dateHoliday,
            end: evt.dateHolidayEnd,
            
          }
        })
        this.calendarOptions = signal<CalendarOptions>({
          events: this.INITIAL_EVENTS,
        });
      console.log(this.INITIAL_EVENTS)




  addEvent(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Event added:', result);
      }
    });
  }

  handleWeekendsToggle() {
    this.calendarOptions.update((options) => ({
      ...options,
      weekends: !options.weekends,
    }));
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges();
  }

}
