var models = require('../models');

exports.view = function(req, res){
	models.UserInfo
		.find({"UserName": req.session.username})
		.exec(renderName);

function renderName(err,userData){
 	if(err) console.log(err);
 	console.log(userData);
	res.render('sendReport',userData[0]);
}
};