var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res) {
	var db = req.db;
	var md5 = require('md5');

	// get post data
	var username = req.body.username;
	var password = md5(req.body.password);

	var collection = db.get('users');

	collection.findOne({$or:[{username: username}, {email: username}], password: password}, {}, function(e,doc){
		req.session.auth_id = doc._id;
		res.redirect('user');
	});
});

router.post('/signup', function (req, res) {
	var db = req.db;

	// get post data
	var name = req.body.name;
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var conf_password = req.body.conf_password;

	var collection = db.get('users');

	var md5 = require('md5');

	// insert into db
	collection.insert({
		'name': name,
		'username': username,
		'email': email,
		'password': md5(password)
	}, function(err, doc) {
		if(err) {
			res.send('There was a problem adding the information to the database');
		} else {
			res.redirect('users');
		}
	});

  //res.render('index', { title: 'Post' });
});

module.exports = router;
