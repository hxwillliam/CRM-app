import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DemoUtilsModule } from './module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule, FormsModule, FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DemoUtilsModule, CalendarComponent, MatSort
  ],
  exports: [CalendarComponent],
})
export class DemoModule {}
