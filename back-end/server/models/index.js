var mongoose = require('mongoose');
// var article = require('../shemas/article');
var user = require('../shemas/user');
// var menu = require('../shemas/menu');
var menuArticle = require('../shemas/menuArticle');

exports.User = mongoose.model('User',user.schema);
exports.Menu = mongoose.model("Menu", menuArticle.MenuSchema);
exports.Article = mongoose.model("Article", menuArticle.ArticleSchema);



// exports.MenuArticle = mongoose.model('MenuArticle',menuArticle.schema);

// exports.Article = mongoose.model('Article',article.schema);
// exports.Menu = mongoose.model('Menu',menu.schema);