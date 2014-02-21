

exports.view = function(req, res){
	res.render('login',{
		username: req.session.username
	});
};