import { Observable, of, throwError } from 'rxjs';

export class AuthServiceMock {
  userLogin(loginUser: any): Observable<boolean> {
    if (loginUser && loginUser.password === 'admin') {
      return throwError('User not found');
    } else {
      return of(true);
    }
  }
}
