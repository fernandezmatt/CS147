
var Mongoose = require('mongoose');


var MedSchema = new Mongoose.Schema({
  // fields are defined here
  "MedName": String,
  "Description": String
});

exports.medicine = {
	model: Mongoose.model('medicine', MedSchema),
	schema: MedSchema
};

