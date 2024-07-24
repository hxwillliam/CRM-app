import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../user-model';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatSidenavModule, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit, OnChanges {
  @Input() userToEdit: User | null = null;
  @Output() saveSuccess = new EventEmitter<void>();
  @ViewChild('sidenav') sidenav!: MatSidenav;
  showModal: boolean = false;
  

  name: string = '';
  lastname: string = '';
  date: string = '';
  role: string = '';
  id: string = '';

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userToEdit'] && this.userToEdit) {
      this.loadUserData();
    }
  }

  ngOnInit() {
    if (this.userToEdit) {
      this.loadUserData();
    }
  }

  loadUserData() {
    if (this.userToEdit) {
      this.name = this.userToEdit.name;
      this.lastname = this.userToEdit.lastname;
      this.date = this.userToEdit.date;
      this.role = this.userToEdit.role;
      this.id = this.userToEdit.id.toString();
    }
  }

  onSave() {
    const userData: User = {
      name: this.name,
      lastname: this.lastname,
      date: this.date,
      role: this.role,
      id: Number(this.id)
    };
    this.userService.saveUser(userData).subscribe({
      next: () => {
        this.notifySaveSuccess();
      },
      error: (error) => {
        console.error('Error saving user:', error);
      }
    });
    window.location.reload();
  }

  notifySaveSuccess() {
    this.saveSuccess.emit();
    this.showModal = false;
  }

  closeSidenav() {
    this.sidenav.close();
    window.location.reload();
  }
  
}