import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';


const defaultUserUrl = 'http://127.0.0.1:3000/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

url = 'http://127.0.0.1:3000/article';
urlMenu = 'http://127.0.0.1:3000/menu';
urlMenuArticle = 'http://127.0.0.1:3000/menu-article';

  constructor ( private http: HttpClient ) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  }
getArticles(){
      return this.http.get(this.url+'s');
    }
getArticle(id:String){
      return this.http.get(this.url+'/'+id);
    }
addArticle(article : any){
  
  
  let body = {
    libelle : article.libelle,
    description : article.description,
    price : parseInt(article.price) ,
    category : article.category,
  }

  return this.http.post(this.url, body, this.httpOptions );
}

updateArticle(article : any, id:String){
  
  
  let body = {
    libelle : article.libelle,
    description : article.description,
    price : parseInt(article.price) ,
    category : article.category,
  }


  return this.http.put(this.url+'/'+id, body, this.httpOptions );
}

deleteArticle(id:String){

  return this.http.delete(this.url+'/'+id, this.httpOptions );
}

getArticleByCategory(category:String){
  return this.http.get(this.url+'/'+category+'/category');
}

getMenuByDay(day:String){
  return this.http.get(this.urlMenu+'/'+day+'/day');
}

addMenuArticle(articleId : any, menuId:any){
  
  let body = {
    menu_id : menuId,
    article_id : articleId,
    
  }

  return this.http.post(this.urlMenuArticle, body, this.httpOptions );
}

getMenuArticles(menuId:any, category:String){
  
  let body = {
    menu_id : menuId,
    category :category ,
    
  }

  return this.http.post(this.urlMenuArticle+'s', body, this.httpOptions );
}
}
