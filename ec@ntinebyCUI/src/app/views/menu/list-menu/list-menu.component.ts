
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { ArticleService } from '../../../services/article.service';
import { MenuService } from '../../../services/menu.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  readonly today: Date = new Date();
public todayData;
  public articles;
  public entrees;
    public entreesToday;
  public resistances;
    public resistancesToday;
  public desserts;
    public dessertsToday;
  constructor(private sessionService: SessionService,private articleService: ArticleService) { }

  ngOnInit() {
    this.sessionService.weeklyDaysObservable.subscribe(data => this.today.setTime(data.today.getTime()));
this.initMenu();
  }
   capitalize(string:String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  initMenu(){
    
    var Today = this.capitalize(this.today.toString());

    this.articleService.getMenuByDay("Lundi")
    .subscribe(data => 
      { 
        this.todayData= data; console.log(data);
         
        this.articleService.getMenuArticles(this.todayData['_id'],"entree").subscribe(data => { this.entreesToday = data['articles']; console.log(data+"xx");
         },err => { console.log(err);});
        this.articleService.getMenuArticles(this.todayData['_id'],"resistance").subscribe(data => { this.resistancesToday = data['articles']; },err => { console.log(err);});
        this.articleService.getMenuArticles(this.todayData['_id'],"dessert").subscribe(data => { this.dessertsToday = data['articles']; },err => { console.log(err);});
      },err => { console.log(err);}); 

  
  
  }

}
