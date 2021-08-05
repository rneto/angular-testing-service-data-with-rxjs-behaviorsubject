import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser: BehaviorSubject<User> = new BehaviorSubject({} as User);
  public readonly currentUser: Observable<User> = this._currentUser.asObservable();

  constructor() { }

  setCurrentUser(currentUser: User): void {
    this._currentUser.next(currentUser);
  }
}