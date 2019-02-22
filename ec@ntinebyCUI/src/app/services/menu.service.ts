import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

// Default url for users'table
// Pour la voir rajouter.json
const defaultUserUrl = 'https://ecantine-41bcc.firebaseio.com/menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly menusSubject: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
  public readonly menusObservable: Observable<Menu[]>;

  constructor (private httpClient: HttpClient) {

      this.menusObservable = this.menusSubject.asObservable();

      // retrieve menus
      this.getMenus().subscribe(data => {

        const menus: Menu[] = _.map(data, (menu, index) => {
          const id: string = index.toString();
          return { id, ...data};
        });

        this.menusSubject.next(menus);
      });
  }

  //#region CREATE
  // Add a user in users' table
  addMenu(menu: Menu): Observable<Menu>
  {
    return this.httpClient
      .post<Menu>(defaultUserUrl + '.json', menu, httpOptions)
      .pipe(
        tap(data =>
          {
            data;
            console.log('addMenu success');
          }),
        catchError(this.handleError<Menu>('addMenu'))
      );
  }
  //#endregion CREATE

  //#region READ
  // Get user where key equals id
  getMenu(id: string): Observable<Menu[]>
  {
    return this.httpClient
      .get<Menu[]>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data =>
          {
            data;
            console.log('getMenu success');
          }),
        catchError(this.handleError('getMenu', []))
      );
  }

  // Get all user in users' table
  getMenus(): Observable<Menu[]>
  {
    return this.httpClient
      .get<Menu[]>(defaultUserUrl + '.json')
      .pipe(
        tap(data =>
          {
            data;
            console.log('getMenus success');
          }),
        catchError(this.handleError('getMenus', []))
    );
  }
  //#endregion READ

  //#region UPDATE
  updateMenu(menu: Menu): Observable<Menu>
  {
    const { id } = menu;
    return this.httpClient
      .patch<Menu>(defaultUserUrl + '/' + id + '.json', menu)
      .pipe(
        tap(data =>
          {
            console.log('updateMenu success');
          }),
        catchError(this.handleError<Menu>('updateMenu'))
      );
  }
  //#endregion UPDATE

  //#region DELETE
  deleteMenu(id: string): Observable<Menu>
  {
    return this.httpClient
      .delete<Menu>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data =>
          {
            console.log('deleteMenu success');
          }),
        catchError(this.handleError<Menu>('deleteMenu'))
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
