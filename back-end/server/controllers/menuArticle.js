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
        Article.findOne({_id:req.body.article_id})
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
var getAll = (req,res)=>{
    Menus.find()
        .then((menus)=>{
            var menuArticles = [];
           
            menus.forEach(menu => {
                
                var menuArticle = new Object();
                menuArticle.jourMenu = menu.jourMenu;
                menuArticle.articles = Array;
                            
                
                 var articles = [];
                if(menu.article.length >0){
                      menu.article.forEach(article_id => {
                    Articles.findOne({_id:article_id})
                            .then(article => {
                               
                                articles.push(article.libelle);
                                console.log(article.libelle);
                                
                            })
                            .catch(err => {res.status(400).send(err);})
                            
                    });
                }
                menuArticle.articles = articles;
                // menuArticle.articles = ['hhd','ss'];
                
                // menuArticle.articles = articles;
                menuArticles.push(menuArticle);

            });

            console.log(menuArticles);

            res.status(200).send(menus);
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
    update
}