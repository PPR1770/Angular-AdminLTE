import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  email: string;
  role: 'Admin' | 'User';
}

@Injectable({ providedIn: 'root' })
export class UsersService {

  private users: User[] = [
    { id: 1, email: 'admin@test.com', role: 'Admin' },
    { id: 2, email: 'user@test.com', role: 'User' }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(400));
  }

  addUser(user: User): Observable<User> {
    user.id = Date.now();
    this.users.push(user);
    return of(user);
  }

  updateUser(user: User): Observable<User> {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
    return of(user);
  }

  deleteUser(id: number): Observable<boolean> {
    this.users = this.users.filter(u => u.id !== id);
    return of(true);
  }
}
