import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

// timestamp is in milliseconds which mean
export const SECONDTIMESTAMP: number = 1000;
export const MINUTETIMESTAMP: number = SECONDTIMESTAMP * 60;
export const HOURTIMESTAMP: number = MINUTETIMESTAMP * 60;
export const DAYTIMESTAMP: number = HOURTIMESTAMP * 24;
// we don't need more than thoses

export class WeeklyDays {
  constructor(public today?: Date,
    public monday?: Date,
    public tuesday?: Date,
    public wednesday?: Date,
    public thursday?: Date,
    public friday?: Date
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // panier
  private readonly countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public readonly countObservable: Observable<number>;

  // weekly days
  private readonly weeklyDaysSubject: BehaviorSubject<WeeklyDays> = new BehaviorSubject<WeeklyDays>(new WeeklyDays());
  public readonly weeklyDaysObservable: Observable<WeeklyDays>;
  // return date
  getDateOfWeek(date: Date, dayOfWeek: number)
  {
    //go to 0
    let sundayTimeStamp: number = date.getTime() - date.getDay() * DAYTIMESTAMP;
    
    let resultTimeStamp: number = sundayTimeStamp + dayOfWeek * DAYTIMESTAMP;
    let resultDate: Date = new Date();
    resultDate.setTime(resultTimeStamp);
    return resultDate;
  }

  constructor() {
    this.countObservable = this.countSubject.asObservable();
    this.weeklyDaysObservable = this.weeklyDaysSubject.asObservable();

    // today
    let today: Date = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    this.weeklyDaysSubject.value.today = today;
    // monday
    this.weeklyDaysSubject.value.monday = today.getDate() === 1 ? today : this.getDateOfWeek(today, 1);
    // tuesday
    this.weeklyDaysSubject.value.tuesday = today.getDate() === 1 ? today : this.getDateOfWeek(today, 2);
    // wednesday
    this.weeklyDaysSubject.value.wednesday = today.getDate() === 1 ? today : this.getDateOfWeek(today, 3);
    // thursday
    this.weeklyDaysSubject.value.thursday = today.getDate() === 1 ? today : this.getDateOfWeek(today, 4);
    // friday
    this.weeklyDaysSubject.value.friday = today.getDate() === 5 ? today: this.getDateOfWeek(today, 5);
    this.weeklyDaysSubject.next(this.weeklyDaysSubject.value);
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
