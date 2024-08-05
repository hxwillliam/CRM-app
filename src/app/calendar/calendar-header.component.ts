import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarModule, CalendarView, CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'mwl-demo-utils-calendar-header',
  standalone: true,
  imports: [CalendarModule, CommonModule],
  styleUrl: './calendar-header.component.css',
  templateUrl: 'calendar-header.component.html'
})
export class CalendarHeaderComponent {
  @Input() view!: CalendarView;

  @Input() viewDate!: Date;

  @Input() events: CalendarEvent[] = [];

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;

  changeView(view: CalendarView): void {
    this.view = view;
    this.viewChange.emit(view);
  }
}
