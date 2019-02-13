var express = require('express');
var mongoose = require('mongoose');
var article = require('../shemas/article');



exports.Article = mongoose.model('Article',article.schema);
