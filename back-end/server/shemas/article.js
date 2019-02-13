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
        type:Number
    },
    category:{
        type:String
    }
});
