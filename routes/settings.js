
var models = require('../models');

exports.view = function(req, res){
	models.UserInfo
		.find({"UserName": req.session.username})
		.exec(renderName);

	function renderName(err,userData){
	 	if(err) console.log(err);
	 	console.log(userData);
		res.render('settings',userData[0]);
	}
};

exports.addSymptom = function(req, res) {
 	var form_data = req.body;
	var query = {"UserName": req.session.username};
	models.UserInfo.findOneAndUpdate(query,{$push:{"Symptoms":{name: form_data.addedSymptom}}},{upsert:false},addSympt);

	function addSympt(err,userData){
	 	if(err) console.log(err);
		res.send();
	}
};

exports.deleteSymptom = function(req, res) {
   	var form_data = req.params.id;
   	console.log(req);
	var query = {"UserName": req.session.username};
	// models.UserInfo.findOneAndUpdate(query,{$remove:{"Symptoms":{name: form_data.deleteSymptom}}},afterRemoving);
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
    models.UserInfo
    .find({"UserName": req.session.username})
    .remove({"Symptoms":{name: "form_data.deleteSymptom"}})
    .exec(afterRemoving);

    function afterRemoving(err){
      if(err) {console.log(err); res.send(500)}
      res.send();
    }
}



