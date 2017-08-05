var express = require('express');
var router = express.Router();

fs = require('fs'),
path=require('path');
var formidable = require('formidable');
var FCM = require('fcm-node');
var serverKey="AAAAHjYwNKY:APA91bEl8nZsAbt7BTUInkHGwpN6ui9ZZdrApNm_lK6MbYq5asvNYiiE9DujUH9dh1E3ZXdD29b6e52tA4qgwi0PIWWiSZ14rgy6xptKCHOaMmj8lUJsWzyo3A1DkymnGiQ2q02v9tLi";

var fcm = new FCM(serverKey);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 안드로드이드 푸시 코드
router.get('/sendFcmNotification', function(req, res) {
    // 선오가 완료하면 파라미터로 토큰값을 받아넘겨 테스트해야함.
	var data=req.body;
	var message="Hey! you got this notification.";
	var title="DigitSTORY Notification";
	var token="c71NtSzOlyE:APA91bG9iHki6pF88GlAmirUyzrFzbuqt1Jkh9az1zU6KTXsB17uLRe4Xu-IDCLi9lymD1887HmYDDtqtMnjCmXVe6mTQInrGVszxwpsiShTP3VbmAKX2Gr9zEYP5pczFz8bRE2rNNx-";

	var message = {
	    to: token,
	    notification: {
	        title: title, //title of notification
	        body: message, //content of the notification
	        sound: "default",
	        icon: "ic_launcher" //default notification icon
	    },
	    data: data //payload you want to send with your notification
	};
	fcm.send(message, function(err, response){
	    if (err) {
	        console.log("Notification not sent");
	        res.json({success:false})
	    } else {
	        console.log("Successfully sent with response: ", response);
	        res.json({success:true})
	    }
	});
});

router.get('/test', function(req, req, next){
   res.send('dbbase');
});


module.exports = router;
