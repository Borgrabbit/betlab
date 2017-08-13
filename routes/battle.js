//battle.js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var battle_receiver = '';
	var in_hopeFat = '';
	var in_hopeMuscle = '';

	res.json({
		"sucess_code" : 1,
		"message" : "",
		"result" : [
			{
				"battle_receiver" : battle_receiver,
				"in_hopeFat" : in_hopeFat,
				"in_hopeMuscle" : in_hopeMuscle
			}
		]
	});
});

module.exports = router;