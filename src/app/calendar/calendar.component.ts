
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { colors } from './colors';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './calendar-header.component';
import { EventModalComponent} from "./event-modal/event-modal.component";

@Component({
  selector: 'mwl-demo-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, CalendarHeaderComponent, EventModalComponent, EventModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    button {
      background-color: #29c1f8;
      color: white;
      border: none;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      margin-top: 20px;
      margin-left: 45%;
    }

    button:hover {
      background-color: #0056b3;
    }
    `,
  templateUrl: './calendar.component.html'
})
export class CalendarComponent {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();
  dataArray = [

  ];

  constructor(public dialog: MatDialog) {}
  
  openModal(): void {
    const dialogRef = this.dialog.open(EventModalComponent, {
      width: '900px',
      data: { dataArray: this.dataArray }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  
  events: CalendarEvent[] = [
    {
      title: 'Editable event',
      color: colors.yellow,
      start: new Date(),
      actions: [
        {
          label: '<i class="fas fa-fw fa-pencil-alt"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            console.log('Edit event', event);
          },
        },
      ],
    },
    {
      title: 'Deletable event',
      color: colors.blue,
      start: new Date(),
      actions: [
        {
          label: '<i class="fas fa-fw fa-trash-alt"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.events = this.events.filter((iEvent) => iEvent !== event);
            console.log('Event deleted', event);
          },
        },
      ],
    },
    {
      title: 'Non editable and deletable event',
      color: colors.red,
      start: new Date(),
    },
  ];

}
