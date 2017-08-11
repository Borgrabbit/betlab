var express = require('express');
var router = express.Router();

fs = require('fs'),
path=require('path');
var formidable = require('formidable');
var FCM = require('fcm-node');
var serverKey="AAAAHjYwNKY:APA91bEl8nZsAbt7BTUInkHGwpN6ui9ZZdrApNm_lK6MbYq5asvNYiiE9DujUH9dh1E3ZXdD29b6e52tA4qgwi0PIWWiSZ14rgy6xptKCHOaMmj8lUJsWzyo3A1DkymnGiQ2q02v9tLi";

var fcm = new FCM(serverKey);


/* GET home page. */
router.get('/', function(req, res, next){
	res.render('index', {title : 'Express'});
});

//FB 로그인 요청
//  /:fb_id/:fb_name/:fb_gen
router.post('/fb_login', function(req, res, next) {
	var data = req.body;

	console.log('req.body = ', req.body);

	res.json({
		'message' : '정보',
		'pushData' : req.body
	});
	//res.send('success ');

	// if(req.body == null){
	// 	res.json({
	// 	  “success” : 0,
	// 	  “message” : “FB 연동 회원정보 DB입력 실패”,
	// 	  “result” : null
	// 	});
	// } else {
	// 	  res.json({
	// 	  	“success” : 1,
	// 	  	“message” : “FB 연동 회원정보 DB입력 성공”,
	// 	  	“result” : “”
	// 	  });
	// }

});

/* 선오
{ id: '1377052065745624',
  token: 'c71NtSzOlyE:APA91bG9iHki6pF88GlAmirUyzrFzbuqt1Jkh9az1zU6KTXsB17uLRe4Xu-IDCLi9lymD1887HmYDDtqtMnjCmXVe6mTQInrGVszxwpsiShTP3VbmAKX2Gr9zEYP5pczFz8bRE2rNNx-',
  partenrId: '1469843866434116' }

 형우
  id: '1311435925634085',
   token: 'dGltxFKOrWE:APA91bE80eSNdjTzSgRV6ZVQmtQaWEiSRXYPVFgxxI4qpGWCrMvqlDjL9M7MZLuNsLiBeR_bo1ADwB3ouAx2KE5w1LJrlr0sJeUaBAsRRzox4r_hgWDGLpDXUkHc5m7va2Wf2-sVgA9a',
   partenrId: '1377052065745624'
*/


var ids = [];
var tokens = [];
var partnerId = [];

var idS = '1377052065745624';
var idH = '1311435925634085';
var tokenS = "c71NtSzOlyE:APA91bG9iHki6pF88GlAmirUyzrFzbuqt1Jkh9az1zU6KTXsB17uLRe4Xu-IDCLi9lymD1887HmYDDtqtMnjCmXVe6mTQInrGVszxwpsiShTP3VbmAKX2Gr9zEYP5pczFz8bRE2rNNx-";
var tokenH = "dGltxFKOrWE:APA91bE80eSNdjTzSgRV6ZVQmtQaWEiSRXYPVFgxxI4qpGWCrMvqlDjL9M7MZLuNsLiBeR_bo1ADwB3ouAx2KE5w1LJrlr0sJeUaBAsRRzox4r_hgWDGLpDXUkHc5m7va2Wf2-sVgA9a";




// 안드로드이드 푸시 코드
router.post('/push', function(req, res) {
    // 선오가 완료하면 파라미터로 토큰값을 받아넘겨 테스트해야함.

	var data = req.body;
	var message1 = "Hey this is message";
	var title = "hey Check out this";
    var token = req.body.token

    console.log('req.body = ', req.body);

	var message = {
	    to: token,
	    notification: {
	        title: "betlab", //title of notification
	        body: "푸시 메시지가 도착했습니다.", //content of the notification
	        sound: "default",
	        icon: "ic_launcher" //default notification icon
	    },
	    data : data //payload you want to send with your notification
	};
	fcm.send(message, function(err, response){
	    if (err) {
	        console.log("Notification not sent");
	        res.json({
	        	"success" : false
	        });
	    } else {
	        console.log("Successfully sent with response: ", response);
	        res.json({ success : true });
	    }
	});
});

// 안드로드이드 푸시 코드 원본 테스트 =
router.post('/sendFcmNotification', function(req, res) {
    // 선오가 완료하면 파라미터로 토큰값을 받아넘겨 테스트해야함.
	var data = req.body;
	var message1 = "1123";
	var title = "title of push";
	//var token = req.body.token;
    var token = "dGltxFKOrWE:APA91bE80eSNdjTzSgRV6ZVQmtQaWEiSRXYPVFgxxI4qpGWCrMvqlDjL9M7MZLuNsLiBeR_bo1ADwB3ouAx2KE5w1LJrlr0sJeUaBAsRRzox4r_hgWDGLpDXUkHc5m7va2Wf2-sVgA9a";

    console.log('req.body = ', req.body);

	var message = {
	    to: token,
	    notification: {
	        title: "555", //title of notification
	        body: "55555", //content of the notification
	        sound: "default",
	        icon: "ic_launcher" //default notification icon
	    },
	    data : data //payload you want to send with your notification
	};
	fcm.send(message, function(err, response){
	    if (err) {
	        console.log("Notification not sent");
	        res.json({
	        	"success" : false
	        })
	    } else {
	        console.log("Successfully sent with response: ", response);
	        res.json({success:true});
	    }
	});
});


router.get('/test', function(req, res, next){
   res.send('dbbase');
});


module.exports = router;
