var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	res.json({
		"sucesss" : 1,
		"message" : "출석 성공",
		"result" : [""],
	});
});

module.exports = router;