// var mongoose = require('mongoose');
var express = require('express');
const {mongoose} = require('./db/mongoose');
var bodyParser = require('body-parser'); 

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

// ***** Déclaration des controllers
var articleController = require('./controllers/article');
var userController = require('./controllers/user');
// ########## ROUTES ############//


app.get('/home',(req,res)=>{

    res.send("Page Home");
});

//---------- ARTICLES----------

    // Liste de tous les articles
    app.get('/articles',articleController.getAll);

    // Ajout d'un article
    app.post('/article',articleController.create);

    // Supression d'un article 
    app.delete('/article/:id',articleController.deleteById);

    //Selection d'un article 
    app.get('/article/:id',articleController.findById);

    // Modification d'un article 
    app.put('/article/:id',articleController.update);

//---------- USER----------

    // Liste de tous les users
    app.get('/users',userController.getAll);

    // Ajout d'un user
    app.post('/user',userController.create);

    // Supression d'un user 
    app.delete('/user/:id',userController.deleteById);

    //Selection d'un user 
    app.get('/user/:id',userController.findById);

    // Modification d'un user 
    app.put('/user/:id',userController.update);
//########## FIN DES ROUTES ###########/




app.listen(3000,()=>{
    console.log("serveur démarré");
    
});

module.exports={app
}
