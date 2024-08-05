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

export interface Event {
  title: string;
  date: Date;
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventModalComponent implements OnInit{
  
  dataSource = new MatTableDataSource<Event>(); 
  dataArray: Event[] = [];
  displayedColumns: string[] = ['title', 'time', 'description', 'actions'];
  event: Event = { title: '', date: new Date(), time: '', description: '' };
  
  constructor(
    public dialogRef: MatDialogRef<EventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    if (this.data && this.data.events) {
      this.dataArray = this.data.events;
    } else {
      this.dataArray = [{ title: '', date: new Date(), time: '', description: '' }];
    }
    this.dataSource.data = this.dataArray;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEvent(element: Event) {
    const index = this.dataArray.findIndex(event => event === element);
    if (index !== -1) {
      this.dataArray[index] = element;
      this.dataSource.data = [...this.dataArray];
    }
  }

  deleteEvent(element: Event) {
    this.dataArray = this.dataArray.filter(event => event !== element);
    this.dataSource.data = [...this.dataArray];
  }
}