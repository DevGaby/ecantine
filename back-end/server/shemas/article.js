var mongoose = require('mongoose');

exports.schema = new mongoose.Schema({
    libelle : {
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});
