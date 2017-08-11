//gym.js
var mongoose = require('mongoose');
var db = require('./db');
var Schema = mongoose.Schema;

var GymSchema = new Schema({
    gym_no: Number,
    gym_gpsLat: String,
    gym_gpsLong: String,
    gym_name: String,
    gym_tel: Number,
    gym_fulladdress: String,
    gym_address1: String,
    gym_address2: String
});

var GymModel = db.model('Gym', GymSchema);

module.exports = GymModel;
