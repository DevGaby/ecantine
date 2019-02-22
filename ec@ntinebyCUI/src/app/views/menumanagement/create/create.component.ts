import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { Observable } from 'rxjs';

import { SessionService, DAYTIMESTAMP, WeeklyDays } from './../../../services/session.service';
import { ArticleService } from '../../../services/article.service';

import { Article } from '../../../models/article';

import * as _ from 'lodash';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  weeklyDays: WeeklyDays;

  // split by category
  readonly entrees: Article[] = [];

  readonly resistances: Article[] = [];

  readonly desserts: Article[] = [];

  constructor(private SessionService: SessionService,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.SessionService.weeklyDaysObservable.subscribe(data => this.weeklyDays = data);

    // this.articleService.articlesObservable.subscribe(data => {
    //   this.entrees.splice(0, this.entrees.length, ..._.filter(data, { category: 'Entrée'}));
    //   this.resistances.splice(0, this.resistances.length, ..._.filter(data, { category: 'Résistance'}));
    //   this.desserts.splice(0, this.desserts.length, ..._.filter(data, { category: 'Dessert'}));
    // });
  }

  addToMenu(id: string, dateMenu: number)
  {

  }

  removeToMenu(id: string, dateMenu: number)
  {

  }
}