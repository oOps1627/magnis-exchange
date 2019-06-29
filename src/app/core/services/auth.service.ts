import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

import { User } from '../models/user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private currentUserSubject: BehaviorSubject<User>;
  private authUrl = `${environment.API_URL}/users`;

  constructor(private http: HttpClient, private oauth: AuthService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')) ||
      JSON.parse(sessionStorage.getItem('currentUser')) || {});
    this.oauth.authState.subscribe(user => {
      if (user && JSON.parse(localStorage.getItem('currentUser')) === {}) {
        this.loginWithGoogle();
      }
      ;
    });
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
            const currentUser = new User();
            currentUser.firstName = user.firstName;
            currentUser.lastName = user.lastName;
            currentUser.username = user.username;
            currentUser.token = user.token;
            if (user.photoUrl) {
              currentUser.photoUrl = user.photoUrl;
            }
            if (remember) {
              localStorage.setItem('currentUser', JSON.stringify(currentUser));
            } else {
              sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
            this.currentUserSubject.next(currentUser);
            return currentUser;
          },
          catchError(this.handleError<User>()))
      );
  }

  loginWithGoogle(): any {
    this.oauth.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      const currentUser: User = new User();
      currentUser.firstName = user.firstName;
      currentUser.lastName = user.lastName || user.firstName;
      currentUser.photoUrl = user.photoUrl;
      currentUser.username = user.name;
      currentUser.token = user.authToken;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.currentUserSubject.next(currentUser);
      this.router.navigate(['/']);
      return new Promise(() => {
        return currentUser;
      });
    }, (error) => {
      console.error('Can`t get data from Google:', error);
      return throwError(error);
    });
  }

  register() {
  }

  logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.oauth.signOut();
    this.currentUserSubject.next(null);
  }

  private handleError<T>() {
    return (error: any): Observable<T> => {
      console.error(error);
      return throwError(error);
    };
  }

}
