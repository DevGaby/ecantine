import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../../services/article.service';
import { NgForm } from '@angular/forms';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {  

    // test
    if (form.form.value.name === "")
    {
      console.log('name is empty');
      return;
    }

    if (form.form.value.category === "")
    {
      console.log('category is empty');
      return;
    }

    if (form.form.value.price === null || form.form.value.price <= 0)
    {
      console.log('price invalid');
      return;
    }

    // add
    const article: Article = form.form.value;

    this.articleService.addArticle(article).subscribe(_ => {
      // reset
      form.reset();
    });
  }
}
