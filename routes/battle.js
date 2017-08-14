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


router.get('/:member_no/:opponent_no/:battle_period/:gym_no/:bet_name', function(req, res, next) {
	var battle_receiver = '';
	var in_hopeFat = '';
	var in_hopeMuscle = '';

	res.json({
		"sucess_code" : 1,
		"message" : "",
		"result" :
			{
                "battle_sender_inbody" : "인바디정보 - 배열",
				"battle_sender" : "엄선오",
				"battle_receiver" : "윤준하",
				"battle_period" : "기간",
                "battle_category" : "뺨맞기"
			}
	});
});

router.post('/acceptance', function(req, res, next) {
    res.json({
        "success" : 1,
        "result" : {"battle_sender" : "임요환",
        "battle_sender_attendance" : 5,
        "battle_sender_fat_diff" : 5,
        "battle_sender_mus_diff" : 5,
        "battle_receiver" : "hong jin ho",
        "battle_receiver_attendance" : 5,
        "battle_receiver_fat_diff" : 5,
        "battle_receiver_mus_diff" : 5
                   }
    });
});

//8. 배틀히스토리
router.get('/:member_no', function(req, res, next) {
    res.json({
        "success" : 1,
        "message" : "대결히스토리 목록불러오기",
        "result"  : [
            {
                "batte_receiver" : "큰토끼",
                "bet_category" : "딱밤맞기",
                "battle_period" : "기간",
                "sender_winOrlose" : "true or false",
                "battle_no" : "5"
            }
        ]
    })
});

router.get('/history/:member_no/:battle_no', function(req, res, next){
   res.json({
       "success" : 1,
       "result" : {
           "battle_period" : "기간",
           "bet_category" : "내기종류",
           "battle_sender" : "bigrabbit",
           "battle_senderWinorLose" : "ture",
           "battle_sender_fat_mus" : [24,24],
           "battle_sender_score" : ["fatscore", "musscore", "attendscore", "finalscore"],
           "battle_receiver" : "tinyrabbit",
           "battle_receiver_WInOrLose" : "false",
           "battle_receiver_fat_mus" : [14, 51],
           "battle_receiver_score" : ["fatscore", "musscore", "attendscore", "finalscore"]
       }
       
   });
});

module.exports = router;