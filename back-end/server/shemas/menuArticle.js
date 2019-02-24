var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");
 

// Schemas et modele menu (Parent)
var MenuSchema = new Schema({
    jourMenu:{
        type:String,
        // required:true,
        // unique:true
    },
    article:[{ type:Schema.ObjectId, ref:"Article"}]
});
 

// Schemas et modele article (enfant)

var ArticleSchema = new Schema({
    libelle : {
        type:String,
        unique:true,
    },
    description:{
        type:String
    },
    price:{
        type:Number,
    },
    category:{
        type:String,
    },
    menus: [{ type:Schema.ObjectId, ref:"Menu", childPath:"article"}]
});
ArticleSchema.plugin(relationship, { relationshipPathName:'menus' });



module.exports = {
    MenuSchema,
    ArticleSchema
}