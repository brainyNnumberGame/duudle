var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:roomId(\\d+)', function(req, res, next) {
	var roomId = req.params.roomId;
	var globalInfo = {
		'roomId' : roomId
    };
	globalInfo = JSON.stringify(globalInfo);
  	res.render('room', { title: 'duudle',globalInfo:globalInfo});
});

module.exports = router;
