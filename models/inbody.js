//inbody.js
var mongoose = require('mongoose');
var db = require('./db');
var Schema = mongoose.Schema;

var InbodySchema = new Schema({
    in_id : { type: ObjectId, ref: 'Member' },
    in_fat: Array,
    in_muscle: Array,
    in_hopeFat: Number,
    in_hopeMuscle: Number,
    in_fatValue: Number,
    in_muscleValue: Number
});

var InbodyModel = db.model('Inbody' , InbodySchema);

module.exports = InbodyModel;
