//category.js
var mongoose = require('mongoose');
var db = require('./db');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    category_no: Number,
    category_name: String
});

var CategoryModel = db.model('Category' , CategorySchema);

module.exports = CategoryModel;
