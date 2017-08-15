//member.js
var mongoose = require('mongoose');
var db = require('./db');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
   member_no: Number,
   member_token: String,
   member_id: String,
   member_name: String,
   member_gen: String,
   member_weight: Number,
   member_gpsLat: String,
   member_gpsLong: String,
   member_attend: Number(0),
   member_attendDate: String,
   member_attend_count: Boolean,
   member_score: Number,
   member_history: [{type: mongoose.Schema.Types.ObjectId, ref: 'Battle'}],
   member_gym: { type: mongoose.Schema.Types.ObjectId, ref : 'Gym'}
});

var MemberModel = db.model('Member' , MemberSchema);

module.exports = MemberModel;
