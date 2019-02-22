import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
const defaultUserUrl = 'https://ecantine-41bcc.firebaseio.com/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesSubject: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  public articlesObservable: Observable<Article[]>;

  constructor ( private httpClient: HttpClient ) {

    console.log('article service');

    this.articlesObservable = this.articlesSubject.asObservable();
    
    this.getArticles().subscribe(data => {
      const articles: Article[] = _.map(data, (article, index) => {
        const id: string = index.toString();
        return { id , ...article };
      });

      this.articlesSubject.value.push(...articles);
      this.articlesSubject.next(this.articlesSubject.value);
    });
  }

  //#region CREATE
  // Add a user in users' table
  addArticle(article: Article): Observable<Article>
  {
    return this.httpClient
      .post<any>(defaultUserUrl + '.json', article, httpOptions)
      .pipe(
        tap(data =>
          {
            this.articlesSubject.next(_.concat(this.articlesSubject.value, { id: data.name, ...article }))

            console.log('addArticle success');
          }),
        catchError(this.handleError<Article>('addArticle'))
      );
  }
  //#endregion CREATE

  //#region READ
  // Get user where key equals id
  getArticle(id: string): Observable<Article[]>
  {
    return this.httpClient
      .get<Article[]>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data =>
          {
            data;
            console.log('getArticle success');
          }),
        catchError(this.handleError('getArticle', []))
      );
  }

  // Get all user in users' table
  getArticles(): Observable<Article[]>
  {
    return this.httpClient
      .get<Article[]>(defaultUserUrl + '.json')
      .pipe(
        tap(data =>
          {
            data;
            console.log('getArticles success');
          }),
        catchError(this.handleError('getArticles', []))
    );
  }
  //#endregion READ

  //#region UPDATE
  updateArticle(article: Article): Observable<Article>
  {
    const { id } = article;
    return this.httpClient
      .patch<Article>(defaultUserUrl + '/' + id + '.json', article)
      .pipe(
        tap(data =>
          {
            console.log('updateArticle success');
          }),
        catchError(this.handleError<Article>('updateArticle'))
      );
  }
  //#endregion UPDATE

  //#region DELETE
  deleteArticle(id: string): Observable<Article>
  {
    return this.httpClient
      .delete<Article>(defaultUserUrl + '/' + id + '.json')
      .pipe(
        tap(data =>
          {
            console.log('deleteArticle success');
          }),
        catchError(this.handleError<Article>('deleteArticle'))
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
