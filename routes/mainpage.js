//mainpage.js
var express = require('express');
var router = express.Router();

router.get('/:member_no', function(req, res, next) {
	var battle_receiver = '';
	var battle_period = '';
	var battle_category = '';
	var battle_sender = '';
	var battle_sender_inbody = '';
	var member_attend = '';
	var member_gym = '';
	res.json({
		"success" : 1,
		"message" : "mainpage response",
		"result" :	[{
					"battle_active" : 1,
					"battle_receiver_2" : battle_receiver,
					"battle_period_2" : battle_period,
					"battle_category_2" : battle_category,
					"battle_sender_3" : battle_sender,
					"battle_sender_inbody_3" : battle_sender_inbody,
					"battle_member_attend_3" : member_attend,
					"gym_1" : member_gym
				}]
	});
});

module.exports = router;