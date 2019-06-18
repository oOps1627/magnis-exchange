import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

const fakeUser = {
  username: 'oops',
  firstName: 'Andrii',
  lastName: 'Krashivskyi',
  password: 'test'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: Observable<User>; // private value of current user
  public currentUserSubject: BehaviorSubject<User>; // for reactive response without reload page

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

}
