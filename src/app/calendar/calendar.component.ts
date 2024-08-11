
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { colors } from './colors';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './calendar-header.component';
import { EventModalComponent} from "./event-modal/event-modal.component";
import { CalendarService } from './calendar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface MyCalendarEvent extends CalendarEvent {
  title: string;
  start: Date;
  time: string;
  description: string;
}

@Component({
  selector: 'mwl-demo-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, CalendarHeaderComponent, EventModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './calendar.component.css',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: MyCalendarEvent[] = [];

  constructor(
    public dialog: MatDialog,
    private calendarService: CalendarService,
    private snackBar: MatSnackBar
  ) {
    this.loadEvents();
  }

  private loadEvents(): void {
    this.calendarService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  private saveEvents(): void {
    this.calendarService.saveEvents();
  }

  openModal(event?: MyCalendarEvent): void {
    this.dialog.open(EventModalComponent, {
      width: '500px',
      data: event ? { event } : { events: this.events }
    });
  }

  getFilteredEvents(): MyCalendarEvent[] {
    const startOfView = this.getStartOfView();
    const endOfView = this.getEndOfView();
    return this.events.filter(event => {
      return event.start >= startOfView && event.start <= endOfView;
    });
  }

  private getStartOfView(): Date {
    switch (this.view) {
      case CalendarView.Month:
        return new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);
      case CalendarView.Week:
        const startOfWeek = new Date(this.viewDate);
        startOfWeek.setDate(this.viewDate.getDate() - this.viewDate.getDay());
        return startOfWeek;
      case CalendarView.Day:
        return new Date(this.viewDate);
      default:
        return new Date();
    }
  }

  private getEndOfView(): Date {
    switch (this.view) {
      case CalendarView.Month:
        return new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 0);
      case CalendarView.Week:
        const endOfWeek = new Date(this.viewDate);
        endOfWeek.setDate(this.viewDate.getDate() - this.viewDate.getDay() + 6);
        return endOfWeek;
      case CalendarView.Day:
        return new Date(this.viewDate);
      default:
        return new Date();
    }
  }
}

//component.instance