import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routeConfig: Routes = [
  { path: '', component: DashboardComponent, title: 'Dashboard' },
  { path: 'calendar', component: CalendarComponent, title: 'Calendar' }
];
export default routeConfig;