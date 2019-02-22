import { Injectable } from '@angular/core';
import { MenuArticle } from '../models/menu-article';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

// Default url for users'table
// Pour la voir rajouter.json
const defaultUserUrl = 'https://ecantine-41bcc.firebaseio.com/menuArticles';

@Injectable({
  providedIn: 'root'
})
export class MenuArticleService {

  constructor ( private httpClient: HttpClient ) { }

  //#region CREATE
  // Add a user in users' table
  addMenuArticle(menuArticle: MenuArticle): Observable<MenuArticle>
  {
    return this.httpClient
      .post<MenuArticle>(defaultUserUrl + '.json', menuArticle, httpOptions)
      .pipe(
        tap(data =>
          {
            data;
            console.log('addMenuArticle success');
          }),
        catchError(this.handleError<MenuArticle>('addMenuArticle'))
      );
  }
  //#endregion CREATE

  //#region READ
  // Get user where key equals id
  getMenuArticle(id: string): Observable<MenuArticle[]>
  {
    return this.httpClient
      .get<MenuArticle[]>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data =>
          {
            data;
            console.log('getMenuArticle success');
          }),
        catchError(this.handleError('getMenuArticle', []))
      );
  }

  // Get all user in users' table
  getMenuArticles(): Observable<MenuArticle[]>
  {
    return this.httpClient
      .get<MenuArticle[]>(defaultUserUrl + '.json')
      .pipe(
        tap(data =>
          {
            data;
            console.log('getMenuArticles success');
          }),
        catchError(this.handleError('getMenuArticles', []))
    );
  }
  //#endregion READ

  //#region UPDATE
  updateMenuArticle(menuArticle: MenuArticle): Observable<MenuArticle>
  {
    const { id } = menuArticle;
    return this.httpClient
      .patch<MenuArticle>(defaultUserUrl + '/' + id + '.json', menuArticle)
      .pipe(
        tap(data =>
          {
            console.log('updateMenuArticle success');
          }),
        catchError(this.handleError<MenuArticle>('updateMenuArticle'))
      );
  }
  //#endregion UPDATE

  //#region DELETE
  deleteMenuArticle(id: string): Observable<MenuArticle>
  {
    return this.httpClient
      .delete<MenuArticle>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data =>
          {
            console.log('deleteMenuArticle success');
          }),
        catchError(this.handleError<MenuArticle>('deleteMenuArticle'))
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
