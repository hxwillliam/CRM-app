import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string;

  constructor(private http: HttpClient) {
    this.authUrl = 'http://localhost:8080/v1/api/auth';
  }

  public loginUser(credentials: Login) {
    return this.http.post(`${this.authUrl}/login`, credentials, {responseType: 'text'});
  }
}
