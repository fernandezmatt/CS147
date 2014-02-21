
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');
//var medicine = require('./medicine');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
var local_database_name = 'ABMUserInfo';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


// Do the initialization here

// Step 1: load the JSON data
var userData_json = require('./userData.json');
//var medicineData_json = require('./medicineData.json');

// Step 2: Remove all existing documents
models.UserInfo
  .find()
  .remove()
  .exec(onceClear); // callback to continue at

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);

  // loop over the projects, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = userData_json.length;
  for(var i=0; i<userData_json.length; i++) {
    var json = userData_json[i];
    var entry = new models.UserInfo(json);

    entry.save(function(err, entry) {
      if(err) console.log(err);

      to_save_count--;
      console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE1');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close()
      }
    });
  }
}


// medicine.MedInfo
//   .find()
//   .remove()
//   .exec(onceClearMed);

// function onceClearMed(err) {
//   if(err) console.log(err);
//   var to_save_count = medicineData_json.length;
//   for(var i=0; i<medicineData_json.length; i++) {
//     var json = medicineData_json[i];
//     var entry = new medicine.MedInfo(json);

//     entry.save(function(err, entry) {
//       if(err) console.log(err);

//       to_save_count--;
//       console.log(to_save_count + ' left to save');
//       if(to_save_count <= 0) {
//         console.log('DONE');
//         // The script won't terminate until the 
//         // connection to the database is closed
//         mongoose.connection.close()
//       }
//     });
//   }
//}

