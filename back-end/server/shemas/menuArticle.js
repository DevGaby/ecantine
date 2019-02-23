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




// Menu.findOne({_id:"5c69b5b06e2666eb9a47a7d5"})
//     .then(men =>{
//         Article.findOne({_id:"5c69b5876e2666eb9a47a7c0"})
//         .then(art=>{
//             art.menus.push(men);
//             art.save();
//         })
//         .catch(err=>{
//             console.log(err);
            
//         });
//     })
//     .catch(err=>{
//         console.log(err);
//     })

module.exports = {
    MenuSchema,
    ArticleSchema
}