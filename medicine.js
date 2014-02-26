
var Mongoose = require('mongoose');


var MedSchema = new Mongoose.Schema({
  // fields are defined here
  //username id auto = object id mongo
  //create schema and id == user id
		"MedName": String,
		"Phoentical": String,
		"Info": String,
		"Morning-time": String,
		"Evening-time": String,
		"Food-info": String,
		"Last-refill": String,
		"Next-refill": String,
		"Warning": String
});


exports.MedInfo = Mongoose.model('MedInfo', MedSchema);

