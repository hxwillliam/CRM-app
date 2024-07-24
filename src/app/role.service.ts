import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private selectedRoleSource = new BehaviorSubject<string | null>(null);
  selectedRole$ = this.selectedRoleSource.asObservable();

  setSelectedRole(role: string) {
    this.selectedRoleSource.next(role);
  }

  constructor() { }
}
