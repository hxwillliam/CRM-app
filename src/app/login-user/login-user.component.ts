import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Login } from '../model/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  constructor(private authService: AuthService, private router: Router,
    private _route: ActivatedRoute
  ) {
    this._route.queryParams.subscribe(params => {
      if (params['redirectURL']) {
        this.urlToRedirect = params['redirectURL'].join('/');
      }
    })
  }
  token: string = '';
  logInfo: Login = {
    userNameLogin: '',
    passwordLogin: ''
  }
  urlToRedirect: string = 'calendar';

  loginUser() {
    this.authService.loginUser(this.logInfo).subscribe({
      next: (data)=>{
        this.token = data;
        localStorage.setItem('token', data);
        this.router.navigateByUrl(this.urlToRedirect)
  
      },
      error: (msg)=>{
        console.log(msg)
      }
    })
  }
}
