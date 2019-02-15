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
    role:{
        type:String,

    },
    fund:{
        type:Number,
        required:true
    },

});