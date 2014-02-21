
var Mongoose = require('mongoose');


var MedSchema = new Mongoose.Schema({
  // fields are defined here
  //username id auto = object id mongo
  //create schema and id == user id
  "MedName": String,
  "Description": String
});

exports.medicine = {
	model: Mongoose.model('medicine', MedSchema),
	schema: MedSchema
};

