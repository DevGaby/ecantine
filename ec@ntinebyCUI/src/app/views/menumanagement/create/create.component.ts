import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';

import { SessionService, DAYTIMESTAMP, WeeklyDays } from './../../../services/session.service';
// import { ArticleService } from '../../../services/article.service';

import { Article } from '../../../models/article';

import { ArticleService } from '../../../services/article.service';
import { MenuService } from '../../../services/menu.service';
import * as $ from 'jquery';
declare var require: any;
const Swal = require('sweetalert2')


import * as _ from 'lodash';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  weeklyDays: WeeklyDays;

  // split by category

  public articles;
  public entrees;
    public entreesLundi;
    public entreesMardi;
    public entreesMercredi;
    public entreesJeudi;
    public entreesVendredi;
  public resistances;
    public resistancesLundi;
    public resistancesMardi;
    public resistancesMercredi;
    public resistancesJeudi;
    public resistancesVendredi;
  public desserts;

  public lundi;
  public mardi;
  public mercredi;
  public jeudi;
  public vendredi;



  constructor(private SessionService: SessionService,
    private articleService: ArticleService, private MenuService: MenuService) { }

  ngOnInit() {
    this.SessionService.weeklyDaysObservable.subscribe(data => this.weeklyDays = data);
this.getArticles();
this.initArticles();
this.initMenu();
    // this.articleService.articlesObservable.subscribe(data => {
    //   this.entrees.splice(0, this.entrees.length, ..._.filter(data, { category: 'Entrée'}));
    //   this.resistances.splice(0, this.resistances.length, ..._.filter(data, { category: 'Résistance'}));
    //   this.desserts.splice(0, this.desserts.length, ..._.filter(data, { category: 'Dessert'}));
    // });
  }


  getArticles(){
    this.articleService.getArticles()
        .subscribe(
          data => { this.articles = data;
          },
          err => { console.log(err);
          }
        )
  }

initArticles(){
    this.articleService.getArticleByCategory('entree')
      .subscribe(
        data => { this.entrees = data;
        },
        err => { console.log(err);
        }
      );
   this.articleService.getArticleByCategory('resistance')
    .subscribe(
      data => { this.resistances = data;
      },
      err => { console.log(err);
      }
    );
  this.articleService.getArticleByCategory('dessert')
    .subscribe(
      data => { this.desserts = data;
      },
      err => { console.log(err);
      }
    );
}

initMenu(){
  this.articleService.getMenuByDay('Lundi')
  .subscribe(data => 
    { 
      this.lundi = data;  
      this.articleService.getMenuArticles(this.lundi['_id'],"entree").subscribe(data => { this.entreesLundi = data['articles']; },err => { console.log(err);});
      this.articleService.getMenuArticles(this.lundi['_id'],"resistance").subscribe(data => { this.resistancesLundi = data['articles']; },err => { console.log(err);});
    },err => { console.log(err);}); 
  this.articleService.getMenuByDay('Mardi').subscribe(data => { this.mardi = data;},err => { console.log(err);});
  this.articleService.getMenuByDay('Mercredi').subscribe(data => { this.mercredi = data;},err => { console.log(err);});
  this.articleService.getMenuByDay('Jeudi').subscribe(data => { this.jeudi = data;},err => { console.log(err);});
  this.articleService.getMenuByDay('Vendredi').subscribe(data => { this.vendredi = data;},err => { console.log(err);});


}


  removeToMenu(menu_id: any, article_id: any)
  {
    
    this.articleService.deleteMenuArticle(menu_id,article_id).subscribe(
      data => {
          $('#'+menu_id+article_id).parents('li').remove();
      },
      err=> {
        console.log(err);   
      }
    )
  }

  addToMenu(menu_id, selectId,ulID){
    var article_id = $( "select#"+selectId+" option:checked" ).val();    
    var libelle = $( "select#"+selectId+" option:checked" ).text();    
    this.articleService.addMenuArticle(article_id,menu_id)
      .subscribe(
        data => { 

        
        },
        err => { console.log(err);
          
          $('#'+ulID).append('<li>'+libelle+'  <button  class="btn btn-danger btn-xs"><i class="fa fa-trash fa-xs"></i></button><hr></li>');
        }
      );
    
    
     
    
  }

}