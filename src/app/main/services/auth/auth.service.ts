import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userLogin(loginUser: any): Observable<boolean> {
    if (loginUser.email === 'admin@gmail.com' && loginUser.password === 'Admin') {
      return of(true);
    } else {
      return throwError('User not found');
    }
  }
}
