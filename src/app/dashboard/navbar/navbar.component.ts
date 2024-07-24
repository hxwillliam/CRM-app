import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RoleService } from '../../role.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  constructor(private roleService: RoleService, private router: Router) {}

  filterByRole(role: string) {
	this.roleService.setSelectedRole(role);
  }
  navigateToCalendar() {
    this.router.navigate(['/calendar']);
  }
}