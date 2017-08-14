//gym.js
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
	var gym_name = '';
	var gym_distance = '';
	var gym_fulladdress = '';
	var gym_address1 = '';
	var gym_address2 = '';

	res.json({
		"success" : 1,
		"message" : "Searching closest gyms",
		"result" : [{
			"gym_name" : gym_name,
			"gym_distance" : gym_distance,
			"gym_fulladdress" : gym_fulladdress,
			"gym_address1" : gym_address1,
			"gym_address2" : gym_address2
		}]
	});
});

router.get('/:address1/:address2/:member_no', function(req, res, next){
    var address1 = req.params.address1;
    
    res.json({
        "success" : 1,
        "message" : "지역별 헬스장 응답 성공",
        "result" : [
            {
                gym_name : "선오헬스 ",
                gym_fulladdress : "서울",
                gym_address1 : "seoul",
                gym_address2 : "중구"
            }
        ]
    })
});

router.get('/:search_word/:member_no', function(req, res, next){
    var address1 = req.params.address1;
    
    res.json({
        "success" : 1,
        "message" : "검색어 헬스장 응답 성공",
        "result" : [
            {
                gym_name : "선오헬스 ",
                gym_fulladdress : "서울",
                gym_address1 : "seoul",
                gym_address2 : "중구"
            }
        ]
    })
});

module.exports = router;