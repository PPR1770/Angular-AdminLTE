import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private role: 'Admin' | 'User' = 'Admin'; // mock

   getRole() {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'Admin';
  }

  login(data: any): Observable<any> {
    return of({ token: 'dummy-jwt-token' }).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(data: any): Observable<any> {
    return of({ success: true });
  }

  logout() { localStorage.removeItem('token'); }

  isLoggedIn(): boolean { return !!localStorage.getItem('token'); }
}
