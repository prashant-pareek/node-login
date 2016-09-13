var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var sess = req.session;

	if(!sess.authid) {
		res.redirect('/');
	} else {
		var db = req.db;
		var collection = db.get('users');

		collection.find({},{},function(e,docs){
			res.render('users', { 
				title: 'User Details',
				users: docs
			});
		});
	}
});

module.exports = router;
