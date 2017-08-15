//fb_signin.js
var express = require('express');
var router = express.Router();

var db = require('../models/db');
var MemberModel = require('../models/member');

router.post('/', function(req, res, next) {
    // 페이스북 연동 정보를 수신하고 
    // fb_id , fb_name , fb_gen
    // fb_id 이용 이미 존재하는지 확인.
    // 없으면 DB 입력
    
    console.log('req.body : ', req.body);
    var fb_id = req.body.fb_id;
    var fb_name = req.body.fb_name;
    var fb_gen = req.body.fb_gen;
    console.log('fb_id', fb_id);
    console.log('fb_name', fb_name);
    console.log('fb_gen', fb_gen);
    
    // fb_id를 이용해 디비 쿼리 날려야함
    
    
    
//    var data = {
//        "member_id"   : fb_id,
//        "member_name" : fb_name,
//        "member_gen"  : fb_gen
//    }
//    
//    var member = MemberModel(data);
    
//    member.save(function(err, doc){
//       if(err) return next(err);
//        console.log('doc = ', doc);
        
        res.json({
		  "success" : 1,
		  "message" : "FB 연동정보 입력 성공",
		  "result" : ""
	    });
//    });
    
});

module.exports = router;