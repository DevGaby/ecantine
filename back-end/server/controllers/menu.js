var models = require('../models');
var express = require('express');

var app = express();

var menus = models.Menu;

// Liste des menus
var getAll = (req,res)=>{
    menus.find()
        .then((menus)=>{
            res.status(200).send(menus);
            })
        .catch(err=>{
            res.status(400).send(err);
        })
}


// Ajout d'un menu
var create = (req,res)=>{
    
    var menu = new models.Menu({
        jourMenu : req.body.jourMenu,
        
    });

    menu.save()
    .then(doc => {
        res.status(200).send(doc);
        })
    .catch(err => {
            res.status(400).send(err);
        })
}


// Selectionner un menu par jour

var findByDay = (req,res)=>{
    menus.findOne({jourMenu:req.params.day}).
    then(menu=>{
        res.status(200).send(menu);
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
    findByDay
}