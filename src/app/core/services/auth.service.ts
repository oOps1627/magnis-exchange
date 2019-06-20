import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private authUrl = `${environment.API_URL}/users`;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')) ||
      JSON.parse(sessionStorage.getItem('currentUser')) || {});
  }

  get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isAuthorized(): boolean {
   const token = this.currentUserValue.token || null;
   return !!token;
  }

  login(username: string, password: string, remember: boolean): Observable<any> {
    const url = `${this.authUrl}/login`;
    return this.http.post<any>(url, {username, password})
      .pipe(
        map(user => {
          if (remember) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          } else {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
          return user;
        },
          catchError(this.handleError<User>()))
    );
  }

  register() {}

  logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError<T>() {
    return (error: any): Observable<T> => {
      console.error(error);
      return throwError(error);
    };
  }

}
