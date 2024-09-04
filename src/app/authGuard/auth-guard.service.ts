import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { 'redirectURL': state.url } });
      return false;
    }
  }
}
