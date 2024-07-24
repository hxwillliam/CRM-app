import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserModalComponent } from "./userModal/user-modal.component";
import { AddUserComponent } from './add-user/add-user.component';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



interface User {
  id: number;
  role: string;
  name: string; 
  lastname: string; 
  date: string; 
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DeleteComponent, MatSidenavModule, UserModalComponent, AddUserComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements OnInit, OnChanges {
  constructor(private router: Router) {}

  selectedUser: User | null = null;
  @Input() selectedRole?: string;
  users: User[] = []; 
  filteredUsers: User[] = []; 
  selectedUserId?: number;
  showModal: boolean = false;
  private drawerStates: { [userId: number]: boolean } = {}; 

  ngOnInit() {
    this.loadUsers();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedRole']) {
      this.filterUsers();
    }
  }

  filterUsers() {
    this.filteredUsers = this.selectedRole
      ? this.users.filter(user => user.role === this.selectedRole)
      : [...this.users];
  }

  loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.filterUsers();
    }
  }
   
  handleUserDeleted(deletedUserId: number): void {
    this.users = this.users.filter(user => user.id !== deletedUserId);
    this.filteredUsers = this.filteredUsers.filter(user => user.id !== deletedUserId);
    localStorage.setItem('users', JSON.stringify(this.users));
    delete this.drawerStates[deletedUserId];
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  toggleDrawer(selectedUser: User): void {
    this.selectedUser = this.selectedUser && this.selectedUser.id === selectedUser.id ? null : selectedUser;
  }

  isDrawerOpen(): boolean {
    return this.selectedUser !== null;
  }
  
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}