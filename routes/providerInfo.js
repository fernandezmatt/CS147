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

exports.addDoctor = function(req, res) {
  var form_data = req.body;

    var newDoctor = new models.UserInfo({
	"DocName": form_data.DocName,
	"DocAddress1": form_data.DocAddress1,
	"DocAddress2": form_data.DocAddress2,
	"DocNumber": form_data.DocNumber
  })

  var query = {"UserName": req.session.username};
  models.UserInfo.findOneAndUpdate(query,{$push:{"Doctor":{name: form_data.DocName, Address1: form_data.DocAddress1, Address2: form_data.DocAddress2, phone: form_data.DocNumber}}},{upsert:false},addDoc);

	function addDoc(err,userData){
	 	if(err) console.log(err);
		res.send();
	}
};

exports.addPharmacy = function(req, res) {
  var form_data = req.body;

    var newPharmacy = new models.UserInfo({
	"PharmacyName": form_data.PharmacyName,
	"PharmacyAddress1": form_data.PharmacyAddress1,
	"PharmacyAddress2": form_data.PharmacyAddress2,
	"PharmacyNumber": form_data.PharmacyNumber
  })

  var query = {"UserName": req.session.username};
  models.UserInfo.findOneAndUpdate(query,{$push:{"Pharmacy":{Pname: form_data.PharmacyName, PAddress1: form_data.PharmacyAddress1, PAddress2: form_data.PharmacyAddress2, Pphone: form_data.PharmacyNumber}}},{upsert:false},addPharmacy);

	function addPharmacy(err,userData){
	 	if(err) console.log(err);
		res.send();
	}
};

exports.deletePharmacy = function(req, res) {
   	var form_data = req.body;
	var query = {"UserName": req.session.username};
    models.UserInfo.findOneAndUpdate(query,{$pull:{"Pharmacy":{Pname: form_data.deletePharmacy}}},{upsert:false},afterRemoving);

    function afterRemoving(err){
      if(err) {console.log(err); res.send(500)};
      res.send();
    }
};

exports.deleteDoctor = function(req, res) {
   	var form_data = req.body;
	var query = {"UserName": req.session.username};
    models.UserInfo.findOneAndUpdate(query,{$pull:{"Doctor":{name: form_data.deleteDoctor}}},{upsert:false},afterRemoving);

    function afterRemoving(err){
      if(err) {console.log(err); res.send(500)};
      res.send();
    }
}