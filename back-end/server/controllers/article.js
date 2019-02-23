var models = require('../models');

var articles  = models.Article;
// Ajout d'un article
var create = (req,res)=>{
    
    var article = new models.Article({
        libelle : req.body.libelle,
        description: req.body.description,
        price: req.body.price,
        category:req.body.category
    });
console.log(req);

    article.save()
    .then(doc => {
        res.status(200).send(doc);
        })
    .catch(err => {
            res.status(400).send(err);
        })
}

// Liste des articles

var getAll = (req,res)=>{
    
    articles.find().then(articles => {
        res.status(200).send(articles);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}
// Selectionner les articles par category

var findByCategory = (req,res)=>{
    articles.find({category:req.params.category}).
    then(articles=>{
        res.status(200).send(articles);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}


// Selectionner un article

var findById = (req,res)=>{
    articles.findOne({_id:req.params.id}).
    then(article=>{
        res.status(200).send(article);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}
// Supprimer un article

var deleteById = (req,res) => {
    articles.findOneAndDelete({_id:req.params.id}).then(articles => {
        res.status(200).send(articles.libelle+" Supprimé !!");
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

// Modifier un article

var update = (req,res)=>{
    options = {
        libelle:req.body.libelle ,
        description:req.body.description ,
        price:req.body.price ,
        category:req.body.category ,
    }

    articles.findOneAndUpdate({_id:req.params.id}, options)
    .then(article=>{
        res.status(200).send(article);
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
    findByCategory
}