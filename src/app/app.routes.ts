import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './authGuard/auth-guard.service';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginUserComponent } from './login-user/login-user.component';

export const routes: Routes = [
    { path: '', component: LoginUserComponent, title: 'Login' },
    { path: 'calendar', component: CalendarComponent, title: 'Calendar', canActivate: [AuthGuardService] },
    { path: 'login', component: LoginUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
