const mongoose = require('mongoose');

exports.schema = new mongoose.Schema({
    libelle:{
        type:String,
        required:true
    },
    dateMenu:{
        type:String
    }
})