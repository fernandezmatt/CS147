// Get all of our friend data
//var data = require('../userData.json');


exports.view = function(req, res){
	res.render('index',{
		username: req.session.username
	});
};		