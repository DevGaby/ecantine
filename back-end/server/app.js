// var mongoose = require('mongoose');
var express = require('express');
const {mongoose} = require('./db/mongoose');

var app = express();

var models = require('./models');

// var {article} =  models.Article();
// console.log(article);




app.get('/home',(req,res)=>{

    res.send("Page Home");
});

app.post('/article',(req,res)=>{
   var {article} = new models.Article();
    //    {
//        libelle: "feddd"
//    });

//    article.save()
//    .then(doc => {
//     res.status(200).send(doc);
//     })
//     .catch(err => {
//         res.status(400).send(err);
//     })
})


app.listen(3000,()=>{
    console.log("serveur démarré");
    
});

module.exports={app
}
