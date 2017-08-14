//push.js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	res.json({
		"sucesss" : 1,
		"message" : "푸시메시지 발사~",
		"result" : {
	    "to" : "토큰",
	    "notification" : {
	        "title": "title",
	        "body": "message",
	        "sound": "default",
	        "icon": "ic_launcher"
	                       },
	    "payload": "data"
	       }
	});
});

router.post('/setting', function(req, res, next) {
	res.json({
		"sucesss" : 1,
		"message" : "설정변경성공",
		"result" : [""]
	});
});

module.exports = router;