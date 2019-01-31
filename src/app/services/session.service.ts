import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public readonly countObservable: Observable<number>;
  constructor() {
    this.countObservable = this.countSubject.asObservable();
  }

  public setCountSubject(count: number)
  {
    this.countSubject.next(count);
  }

  public increaseCountSubject(count: number)
  {
    this.countSubject.next(this.countSubject.value + count);
  }

  public decreaseCountSubject(count: number)
  {
    const value: number = this.countSubject.value - count;
    this.countSubject.next(value > 0 ? value : 0);
  }
}
