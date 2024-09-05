import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AuthGuardService } from './authGuard/auth-guard.service';

const routeConfig: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginUserComponent },
];
export default routeConfig;