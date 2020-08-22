import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn: BehaviorSubject<boolean>;
  readonly isLoggedIn$: Observable<boolean>;

  constructor() {
    this.isLoggedIn = new BehaviorSubject(false);
    this.isLoggedIn$ = this.isLoggedIn.asObservable();
  }

  logIn() {
    this.isLoggedIn.next(true);
  }
}
