// var mongoose = require('mongoose');
var express = require('express');
const {mongoose} = require('./db/mongoose');
var bodyParser = require('body-parser'); 
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())
// ***** Déclaration des controllers
var articleController = require('./controllers/article');
var userController = require('./controllers/user');
var menuController = require('./controllers/menu');
var menuArticleController = require('./controllers/menuArticle');
// ########## ROUTES ############//


app.get('/home',(req,res)=>{

    res.send("Page Home");
});

//---------- ARTICLES----------

    // Liste de tous les articles
    app.get('/articles',articleController.getAll);

    // Ajout d'un article
    app.post('/article',bodyParser.json(),articleController.create);

    // Supression d'un article 
    app.delete('/article/:id',articleController.deleteById);

    //Selection d'un article 
    app.get('/article/:id',articleController.findById);

    //Selection d'un article 
    app.get('/article/:category/category',articleController.findByCategory);
    
    // Modification d'un article 
    app.put('/article/:id',bodyParser.json(),articleController.update);

//---------- USER----------

    // Liste de tous les users
    app.get('/users',userController.getAll);

    // Ajout d'un user
    app.post('/user',bodyParser.json(),userController.create);

    // Supression d'un user 
    app.delete('/user/:id',userController.deleteById);

    //Selection d'un user 
    app.get('/user/:id',userController.findById);

    // Modification d'un user 
    app.put('/user/:id',bodyParser.json(),userController.update);

    // Modification de la cagnotte d'un user 
    app.put('/user/:id/fund',userController.updateFund);

    // Modification du rôle d'un user 
    app.put('/user/:id/role',userController.updateRole);

    // Modification du mot de passe d'un user 
    app.put('/user/:id/password',userController.updatePassword);


//------------ MENU -------------

    // Liste de tous les menus
    app.get('/menus',menuController.getAll);

    // Ajout d'un menu
    app.post('/menu',menuController.create);

    // Supression d'un menu 
    app.delete('/menu/:id',menuController.deleteById);

    //Selection d'un menu par jour
    app.get('/menu/:day/day',menuController.findByDay);

    //Selection d'un menu 
    app.get('/menu/:id',menuController.findById);

    // Modification d'un menu 
    app.put('/menu/:id',menuController.update);


//------------ MENUS-ARTICLES -------------

    // Ajout d'un article dans un menu
    app.post('/menu-article',bodyParser.json(),menuArticleController.create);

    // Liste des articles par menu
    app.get('/menu-articles',menuArticleController.getAll);

    //  Liste des articles par category d'un menu
    app.post('/menu-articles',bodyParser.json(),menuArticleController.getMenuArticleByCategory);

    // Supprimer un article dans un menu 

    app.post('/menu-article/delete',bodyParser.json(),menuArticleController.deleteMenuArticle);
    

//########## FIN DES ROUTES ###########/




app.listen(3000,()=>{
    console.log("serveur démarré");
    
});

module.exports={app
}
