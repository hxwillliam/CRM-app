import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { UserModalComponent } from '../userModal/user-modal.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, UserModalComponent, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  isUserModalVisible: boolean = false;

  toggleUserModal(): void {
    this.isUserModalVisible = !this.isUserModalVisible;
  }
  
}
