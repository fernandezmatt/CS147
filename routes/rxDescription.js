var medicine = require('../medicine');


exports.view = function(req, res) { 
  var medicineName = req.params.name;
  console.log(medicineName);
  medicine.MedInfo
    .find({"MedName": medicineName})
    .exec(afterQuery);

  // query for the specific project and
  // call the following callback

  function afterQuery(err, medData) {
    if(err) console.log(err);
   	console.log(medData[0]);
    res.render('rxDescription',medData[0]);
  }
}