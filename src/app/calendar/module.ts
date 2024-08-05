import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from './calendar-header.component';
import { MatSort } from '@angular/material/sort';

@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule, CalendarHeaderComponent, MatSort],
  exports: [CalendarHeaderComponent],
})
export class DemoUtilsModule {}