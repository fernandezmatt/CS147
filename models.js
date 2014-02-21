
var Mongoose = require('mongoose');
//var definition = require('mongoose').model('medicine.js');

var UserSchema = new Mongoose.Schema({
  // fields are defined here
  "UserName": String,
  "Doctor": String,
  "Pharmacy": String,
  "Symptoms": Array,
  "Medicine": Array
});

exports.UserInfo = Mongoose.model('UserInfo', UserSchema);


