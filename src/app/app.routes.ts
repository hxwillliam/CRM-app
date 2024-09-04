import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginUserComponent } from './login-user/login-user.component';

const routeConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent, title: 'Calendar' },
  { path: 'login', component: LoginUserComponent },
];
export default routeConfig;