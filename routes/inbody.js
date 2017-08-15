//inbody.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.json({
		"success" : 1,
		"message" : "Successfully loaded inbody information",
		"result" : {
			"in_fat" : [25,26,27],
		    "in_muscle" : [25,22,22],
		    "member_weight" : 50
		}
	});
});

router.post('/', function(req, res, next) {
	res.json({
		"success" : 1,
		"message" : "Inbody info successfully saved",
		"result" : ""
		
	});
});


module.exports = router;