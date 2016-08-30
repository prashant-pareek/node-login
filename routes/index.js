var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res) {
	var db = req.db;

	// get post data
	var username = req.body.username;
	var password = req.body.password;

	var collection = db.get('usercollection');

	collection.find({username: username},{password: password},function(e,docs){
		res.render('debug', { list: docs});
	})

  //res.render('index', { title: 'Post' });
  //res.send(username + ' ' + password);
});

router.post('/signup', function (req, res) {
	var db = req.db;

	// get post data
	var name = req.body.name;
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var conf_password = req.body.conf_password;

	var collection = db.get('usercollection');

	// insert into db
	collection.insert({
		'name': name,
		'username': username,
		'email': email,
		'password': password
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
