//gym.js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var gym_name = '';
	var gym_distance = '';
	var gym_fulladdress = '';
	var gym_address1 = '';
	var gym_address2 = '';

	res.json({
		"success" : 1,
		"message" : "Searching closest gyms",
		"result" : [{
			"gym_name" : gym_name,
			"gym_distance" : gym_distance,
			"gym_fulladdress" : gym_fulladdress,
			"gym_address1" : gym_address1,
			"gym_address2" : gym_address2
		}]
	});
});

module.exports = router;