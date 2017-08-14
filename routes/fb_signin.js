//fb_signin.js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	res.json({
		"success" : 1,
		"message" : "FB 연동정보 입력 성공",
		"result" : [""]
	});
});

module.exports = router;