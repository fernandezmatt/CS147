// Get all of our friend data
// var data = require('../userData.json');

// exports.view = function(req, res){
// 	console.log(data);
// 	res.render('providerInfo',data);
// };

var models = require('../models');

exports.view = function(req, res){
	models.UserInfo
		.find({"UserName": req.session.username})
		.exec(renderName);

function renderName(err,userData){
 	if(err) console.log(err);
 	console.log(userData);
	res.render('providerInfo',userData[0]);
}
};

