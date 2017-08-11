//battle.js
var mongoose = require('mongoose');
var db = require('./db');
var Schema = mongoose.Schema;

var BattleSchema = new Schema({
    battle_no: Number,
    battle_period: Date,
    battle_sender : String,
    battle_sender_inbody: Array,
    battle_sender_score: Array,
    battle_receiver : String,
    battle_receiver_inbody: Array,
    battle_receiver_score: Array,
    battle_status: String,
    battle_result: Boolean,
    battle_finished: Array,
    battle_category: {type: ObjectId, ref: 'Category'}
});

var BattleModel = db.model('Battle' , BattleSchema);

module.exports = BattleModel;
