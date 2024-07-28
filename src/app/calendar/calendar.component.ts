
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { colors } from './colors';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from './calendar-header.component';

@Component({
  selector: 'mwl-demo-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule, CalendarHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

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
