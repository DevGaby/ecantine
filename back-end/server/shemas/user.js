var mongoose = require('mongoose');


exports.schema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    statut:{
        type:String,

    },
    fund:{
        type:String,
        required:true
    },

});