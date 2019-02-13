var mongoose = require('mongoose');
var article = require('../shemas/article');
var user = require('../shemas/user');


exports.Article = mongoose.model('Article',article.schema);
exports.User = mongoose.model('User',user.schema);