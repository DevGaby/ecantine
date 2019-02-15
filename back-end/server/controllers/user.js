var models = require('../models');

var users  = models.User;

// Ajout d'un user
var create = (req,res)=>{
    
    var user = new models.User({
        name:req.body.name,
        firstname:req.body.firstname,
        email:req.body.email,
        password:req.body.password,
        role:"etudiant",   // a quel moment ajouter le statut ?
        fund:0,
    });

    user.save()
    .then(doc => {
        res.status(200).send(doc);
        })
    .catch(err => {
            res.status(400).send(err);
        })
}

// Liste des users

var getAll = (req,res)=>{
    
    users.find().then(users => {
        res.status(200).send(users);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}
// Selectionner un user

var findById = (req,res)=>{
    users.findOne({_id:req.params.id}).
    then(user=>{
        res.status(200).send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}
// Supprimer un user

var deleteById = (req,res) => {
    users.findOneAndDelete({_id:req.params.id}).then(user => {
        res.status(200).send(user.name+" Supprimé !!");
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

// Modifier un user

var update = (req,res)=>{
    options = {
        name:req.body.name,
        firstname:req.body.firstname,
        email:req.body.email,
    }

    users.findOneAndUpdate({_id:req.params.id}, options)
    .then(user=>{
        res.status(200).send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

}

//Modifier de la cagnotte de l'utilisateur

var updateFund = (req,res)=>{
    if(req.body.fund <= 0){
        res.status(400).send(' Le montant doit être supérieur ou égale à zero');
    }
    var options = {fund:req.body.fund}
    users.findOneAndUpdate({_id:req.params.id},options)
        .then(user => {
            res.status(200).send("Succès");
        })
        .catch(err=>{
            res.status(400).send(err);
        })
}


//Modifier la role de l'utilisateur

var updateRole = (req,res)=>{
    
    var options = {role:req.body.role}
    users.findOneAndUpdate({_id:req.params.id},options)
        .then(user => {
            res.status(200).send("Succès");
        })
        .catch(err=>{
            res.status(400).send(err);
        })
}

//Modifier la mot de passe de l'utilisateur

var updatePassword = (req,res)=>{
    
    var options = {password:req.body.password}
    users.findOneAndUpdate({_id:req.params.id},options)
        .then(user => {
            res.status(200).send("Succès");
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
    updateFund,
    updateRole,
    updatePassword
}