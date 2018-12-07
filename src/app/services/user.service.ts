import { Injectable } from '@angular/core';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

//Default url for users' table
const defaultUserUrl = 'https://ecantine-41bcc.firebaseio.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:object [] = 
  [
    new User ("1","aa@aa.com", "1234", "Camille","GARNIER",20),
    new User ("2","bb@bb.com", "1234", "Frederic","DUPONT",0),
  ]

  constructor ( ) { }
  private httpClient: HttpClient 

  //#region CREATE
  //Add a user in users' table
  addUser(user: User): Observable<User>
  {
    return this.httpClient
      .post<User>(defaultUserUrl + '.json', user, httpOptions) 
      .pipe(
        tap(data => 
          {
            data;
            console.log('addUser success');
          }),
        catchError(this.handleError('addUser'))
      );
  }
  //#endregion CREATE

  //#region READ
  //Get user where key equals id
  getUser(id: string): Observable<User[]>
  {
    return this.httpClient
      .get<User[]>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data => 
          {
            data;
            console.log('getUser success');
          }),
        catchError(this.handleError('getUser', []))
      );
  }
  
  //Get all user in users' table
  getUsers(): Observable<User[]>
  {
    return this.httpClient
      .get<User[]>(defaultUserUrl + '.json')
      .pipe(
        tap(data => 
          {
            data;
            console.log('getUsers success');
          }),
        catchError(this.handleError('getUsers', []))
    );
  }
  //#endregion READ

  //#region UPDATE
  updateUser(user: User): Observable<User>
  {
    return this.httpClient
      .patch<User>(defaultUserUrl + '/' + user.id + '.json', user)
      .pipe(
        tap(data => 
          {
            console.log('updateUser success');
          }),
        catchError(this.handleError<User>('updateUser'))
      );
  }
  //#endregion UPDATE

  //#region DELETE
  deleteUser(id: string): Observable<User>
  {
    return this.httpClient
      .delete<User>(defaultUserUrl + '/' + id + '.json') 
      .pipe(
        tap(data => 
          {
            console.log('deleteUser success');
          }),
        catchError(this.handleError<User>('deleteUser'))
      );
  }
  //#endregion DELETE

  /*
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
