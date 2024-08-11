import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarService } from '../calendar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Event {
  title: string;
  start: Date;
  time: string;
  description: string;
}

@Component({
  selector: 'app-event-modal',
  standalone: true,
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css'],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventModalComponent implements OnInit {
  dataSource = new MatTableDataSource<Event>(); 
  dataArray: Event[] = [];
  displayedColumns: string[] = ['title', 'time', 'description', 'actions'];
  event: Event = { title: '', start: new Date(), time: '', description: '' };

  constructor(
    public dialogRef: MatDialogRef<EventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private calendarService: CalendarService,
    private snackBar: MatSnackBar
  ) {
    this.event = data.event || { title: '', start: new Date(), description: '' };
  }

  ngOnInit() {
    if (this.data && this.data.events) {
      this.dataArray = this.data.events;
    } else {
      this.dataArray = [{ title: '', start: new Date(), time: '', description: '' }];
    }
    this.dataSource.data = this.dataArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEvent(element: Event) {
    this.calendarService.addEvent(element).subscribe((success: boolean) => {
      if (success) {
        const index = this.dataArray.findIndex((event: Event) => event.title === element.title);
        if (index !== -1) {
          this.dataArray[index] = element;
        } else {
          this.dataArray.push(element);
        }
        this.dataSource.data = [...this.dataArray];
        this.snackBar.open('Event saved successfully!', 'Close', { duration: 3000 });
  
        const parentEvents = this.data.events;
        const parentIndex = parentEvents.findIndex((e: Event) => e.title === element.title);
        if (parentIndex !== -1) {
          parentEvents[parentIndex] = element;
        } else {
          parentEvents.push(element);
        }
  
        this.dialogRef.close(element);
      } else {
        this.snackBar.open('Failed to save event.', 'Close', { duration: 3000 });
      }
    });
  }

  deleteEvent(element: Event) {
    this.calendarService.deleteEvent(element).subscribe(success => {
      if (success) {
        this.dataArray = this.dataArray.filter(event => event !== element);
        this.dataSource.data = [...this.dataArray];
        this.snackBar.open('Event deleted successfully!', 'Close', { duration: 3000 });
      } else {
        this.snackBar.open('Failed to delete event.', 'Close', { duration: 3000 });
      }
    });
  }
}