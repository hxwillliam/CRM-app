import { Injectable } from '@angular/core';
import { User } from './dashboard/user-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUsers(): User[] {
	return JSON.parse(localStorage.getItem('users') || '[]');
  }

  saveUser(user: User): Observable<any> {
	let users = this.getUsers();
	const index = users.findIndex(u => u.id === user.id);
	if (index !== -1) {
	  users[index] = user;
	} else {
	  const lastId = this.getLastUserId();
	  user.id = lastId + 1;
	  users.push(user);
	  this.setLastUserId(user.id);
	}
	localStorage.setItem('users', JSON.stringify(users));
	return of(user); 
  }

  private getLastUserId(): number {
	return parseInt(localStorage.getItem('lastUserId') || '0', 10);
  }

  private setLastUserId(id: number) {
	localStorage.setItem('lastUserId', id.toString());
  }
}