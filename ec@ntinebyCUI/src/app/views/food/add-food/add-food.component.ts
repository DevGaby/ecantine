import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../../services/article.service';
import * as $ from 'jquery';
declare var require: any;
const Swal = require('sweetalert2')
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  public articles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
    this.mesScripts();
   
    
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

  deleteArticle(id:String){
   
    var thiss = this;
        $(document).ready(function(){
          $('.delete').click(function(){
            Swal.fire({
              title: 'Vraiment supprimer l\'article ?',
              text: 'l\'article sera défnitivement supprimé',
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Oui',
              cancelButtonText: 'Non'
            }).then((result) => {
              if (result.value) {
                
                thiss.articleService.deleteArticle(id)
                .subscribe(
                  data => {  thiss.getArticles();
                   
                     },
                  err => { console.log(err);
                  }
                );
            $(this).parents('tr').hide();
                Swal.fire(
                  'Supprimé!',
                  'Article supprimé',
                  'success'
                )
              // For more information about handling dismissals please visit
              // https://sweetalert2.github.io/#handling-dismissals
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                  'Annulé',
                  ' :)',
                  ''
                )
              }
            })
          })
          
          
        });
  }
  



  addArticle(value:any) {
    let article = value;
    
    this.articleService.addArticle(article)
    .subscribe(
      data => { 
        this.getArticles();
        return true;
      },
      error => {
        console.error(error);
        // return Observable.throw(error);
      }
    )
  }

  mesScripts(){




  }
//   $.ajax({                        
//     url: that.attr('href'),
//     type: 'PUT'
// })
// .done(function () {
//         that.parents('tr').remove()
// })

}
