// Get all of our friend data
// exports.view = function(req, res){
// 	res.render('refillVerification3');
// };


var models = require('../models');

exports.view = function(req, res){
	var PharmacyName = req.params.name;
	console.log(PharmacyName);
	models.UserInfo
		.find({"Pname": PharmacyName})
		.exec(renderName);

function renderName(err,userData){
 	if(err) console.log(err);
 	console.log(userData[0]);
	res.render('refillVerification3',userData[0]);
}
};

