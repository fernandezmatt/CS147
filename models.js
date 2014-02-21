
var Mongoose = require('mongoose');
//var definition = require('mongoose').model('medicine.js');

var UserSchema = new Mongoose.Schema({
  // fields are defined here
  "UserName": String,
  "Doctor": String,
  "Pharmacy": Array,
  "Symptoms": String,
});

exports.UserInfo = Mongoose.model('UserInfo', UserSchema);


