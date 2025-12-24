import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockBackendService {
  login() {
    return of({ token: 'mock-token' }).pipe(delay(500));
  }
}
