import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, DashboardComponent, RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'demo-app';
  selectedRole: string = ''; 

  onRoleSelected(role: any) {
    this.selectedRole = role;
  }
}
