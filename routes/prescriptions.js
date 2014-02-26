var models = require('../models');
var medicine = require('../medicine');

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


exports.addPrescription = function(req, res) {
  var form_data = req.body;

  var query = {"UserName": req.session.username};
  models.UserInfo.findOneAndUpdate(query,{$push:{"Medicine":{name: form_data.MedName}}},{upsert:false},addRx);

	function addRx(err,userData){
	 	if(err) console.log(err);
		res.send();
	}

  var newMedicine = new medicine.MedInfo({
	"MedName": form_data.MedName,
	"Phoentical": form_data.Phoentical,
	"Info": form_data.Info,
	"Morning-time": form_data.Morningtime,
	"Evening-time": form_data.Eveningtime,
	"Food-info": form_data.Foodinfo,
	"Last-refill": form_data.Lastrefill,
	"Next-refill": form_data.Nextrefill,
	"Warning": form_data.Warning
  })

  newMedicine.save(afterAdding);

    function afterAdding(err){
      if(err) {console.log(err); res.send(err)}
      res.send();
    }
}