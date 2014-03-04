
var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
  // fields are defined here
  "UserName": String,
  "Doctor": Array,
  "Pharmacy": Array,
  "Symptoms": Array,
  "Medicine": Array
});

exports.UserInfo = Mongoose.model('UserInfo', UserSchema);


