// Get all of our friend data
// exports.view = function(req, res){
// 	res.render('prescriptions');
// };

var models = require('../models');

exports.view = function(req, res){
	models.UserInfo
		.find({"UserName": req.session.username})
		.exec(renderName);

function renderName(err,userData){
 	if(err) console.log(err);
 	console.log(userData);
	res.render('prescriptions',userData[0]);
}
};

// exports.projectInfo = function(req, res) { 
//   var projectID = req.params.id;
//   console.log(projectID);
//   models.Project
//     .find({"_id":projectID})
//     .exec(afterQuery);

//   // query for the specific project and
//   // call the following callback

//   function afterQuery(err, projects) {
//     if(err) console.log(err);
//     console.log("asdadsadsasddsadsasdadadasdasd");
//     res.json(projects[0]);
//   }
// }