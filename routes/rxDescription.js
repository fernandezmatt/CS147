// Get all of our friend data
// var medicine = require('../medicine');
// exports.view = function(req, res){
// 	res.render('rxDescription',medicineData[0]);
// };

var medicine = require('../medicine');



exports.view = function(req, res){
	medicine.MedInfo
		.find()
		.exec(renderName);

function renderName(err,medicineData){
 	if(err) console.log(err);
	res.render('rxDescription',medicineData[0]);
}
};


// };
// var models = require('../models');

// exports.view = function(req, res){
// 	models.UserInfo
// 		.find({"UserName": req.session.username})
// 		.exec(renderName);

// function renderName(err,userData){
//  	if(err) console.log(err);
//  	console.log(userData);
// 	res.render('rxDescription',userData[0]);
// }
// };
