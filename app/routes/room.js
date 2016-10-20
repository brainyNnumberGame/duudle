var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:roomId(\\d+)', function(req, res, next) {
	var roomId = req.params.roomId;
	var drawOrShow = req.query.draw;
	console.log(drawOrShow)
	var globalInfo = {
		'roomId' : roomId
    };
	globalInfo = JSON.stringify(globalInfo);
  	res.render('room', { title: '你画我猜',globalInfo:globalInfo,drawOrShow:drawOrShow});
});

module.exports = router;
