import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ActivatedRoute } from "@angular/router";
declare var require: any;

const Swal = require('sweetalert2');
@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss']
})
export class UpdateFoodComponent implements OnInit {
  
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  public id;
  public article;
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
       this.id = params.get("id")
    })
    
    this.getArticle(this.id);
  }

  getArticle(id:String){
    this.articleService.getArticle(id)
        .subscribe(
          data => { this.article= data; console.log(data);
          
          },
          err => { console.log(err);
          }
        )
  }

  updateArticle(value:any) {
    let article = {
      libelle: (typeof value.libelle =="undefined") ? this.article.libelle : value.libelle,
      description: (typeof value.description =="undefined") ? this.article.description : value.description,
      price: (typeof value.price =="undefined") ? this.article.price : value.price,
      category: (typeof value.category =="undefined") ? this.article.category : value.category,
    };
    
    this.articleService.updateArticle(article, this.id)
    .subscribe(
      data => { 
        console.log(data);
        Swal.fire("Article modifié")
        return true;
      },
      error => {
        console.error(error);
        // return Observable.throw(error);
      }
    )
  }
}
