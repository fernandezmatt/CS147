// Get all of our friend data
// exports.view = function(req, res){
// 	res.render('refillVerification');
// };

var models = require('../models');

exports.view = function(req, res){
	models.UserInfo
		.find({"UserName": req.session.username})
		.exec(renderName);

function renderName(err,userData){
 	if(err) console.log(err);
 	console.log(userData);
	res.render('refillVerification',userData[0]);
}
};

