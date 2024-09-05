import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ],
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventTitle: string = '';
  eventDate: string = '';
  endDate: string = '';
  role: string = '';

  constructor(public dialogRef: MatDialogRef<AddEventComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.dialogRef.close({
      title: this.eventTitle,
      date: this.eventDate,
      endDate: this.endDate,
      role: this.role
    });
  }
}