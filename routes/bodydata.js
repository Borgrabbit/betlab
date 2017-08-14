//bodydata.js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	res.json({
		"success" : 1,
		"message" : "신체정보 입력완료",
		"result" : [""]
	});
});

module.exports = router;