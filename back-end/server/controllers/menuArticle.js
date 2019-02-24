var models = require('../models');
var express = require('express');

var app = express();

var menuArticles = models.MenuArticle;

var Menus = models.Menu;
var Articles = models.Article;

// Ajout d'un article dans un menu
var create = (req,res)=>{
    
    Menus.findOne({_id:req.body.menu_id})
    .then(menu =>{
        Articles.findOne({_id:req.body.article_id})
        .then(article=>{
            article.menus.push(menu);
            article.save();
            res.status(200).send("succès");
        })
        .catch(err=>{
            res.status(400).send(err);
        });
    })
    .catch(err=>{
        res.status(400).send(err);
    })

}


// Liste des articles par menu
var menusArticles = [];
var getAll = (req,res)=>{
    Menus.find()
        .then((menus)=>{

            menus.forEach(menu => {
                var menuArticles = new Object();
                menuArticles.menu = menu;

              Articles.find({_id: {$in : menu.article}})
                      .then(articles=>{
                                                
                        menuArticles.articles = articles;
                        menusArticles.push(menuArticles);
                      }).catch(err=>{res.status(400).send(err);});
              

            });

            var func = ()=>{res.status(200).send(menusArticles);}


            setTimeout(func,2000)
            
            
            
            })
        .catch(err=>{
            res.status(400).send(err);
        })
        
}

// Supprimer un article dans un menu
var deleteMenuArticle = (req,res)=> {

    Menus.findOne({_id:req.body.menu_id})
    .then((menu)=>{

                    var articles;
                    articles = menu.article.filter(function(value, index, arr){
                                    return value != req.body.article_id;
                                });

                    options = {
                        article: articles
                    }                
                    Menus.findOneAndUpdate({_id:req.body.menu_id}, options)
                        .then(menu => {
                            res.status(200).send(menu);
                        })
                        .catch(err=>{
                            res.status(400).send(err);
                        })    
        
        
        })
    .catch(err=>{
        res.status(400).send(err);
    })

}



// Liste des articles par category d'un menu

var getMenuArticleByCategory = (req,res)=>{
    Menus.findOne({_id:req.body.menu_id})
        .then((menu)=>{

                var menuArticles = new Object();
                //menuArticles.menu = menu;

              Articles.find({_id: {$in : menu.article},category:req.body.category})
                      .then(articles=>{
                                                
                        menuArticles.articles = articles;
                      }).catch(err=>{res.status(400).send(err);});
              



            var func = ()=>{res.status(200).send(menuArticles);}


            setTimeout(func,1000)
            
            
            
            })
        .catch(err=>{
            res.status(400).send(err);
        })
        
}


// Selectionner un menu

var findById = (req,res)=>{
    menus.findOne({_id:req.params.id}).
    then(menu=>{
        res.status(200).send(menu);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}
// Supprimer un menu

var deleteById = (req,res) => {
    menus.findOneAndDelete({_id:req.params.id}).then(menus => {
        res.status(200).send(" Supprimé !!");
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

// Modifier un menu

var update = (req,res)=>{
    options = {
        jourMenu:req.body.jourMenu ,
    }

    menus.findOneAndUpdate({_id:req.params.id}, options)
    .then(menu=>{
        res.status(200).send(menu);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

}

module.exports = {
    create,
    getAll,
    deleteById,
    findById,
    update,
    getMenuArticleByCategory,
    deleteMenuArticle
}