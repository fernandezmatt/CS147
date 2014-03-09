
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

/////////////Mongo Additions/////////////////////////////////
var mongoose = require('mongoose');
var local_database_name = 'ABMUserInfo';
var local_database_uri = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);
/////////////////////////////////////////////////////////////


var index = require('./routes/index');
var prescriptions = require('./routes/prescriptions');
var prescriptions2 = require('./routes/prescriptions2');
var refillVerification = require('./routes/refillVerification');
var refillVerification2 = require('./routes/refillVerification2');
var refillVerification3 = require('./routes/refillVerification3');
var refillVerificationConfirmation = require('./routes/refillVerificationConfirmation');
var rxDescription = require('./routes/rxDescription');
var providerInfo = require('./routes/providerInfo');
var settings = require('./routes/settings');
var history = require('./routes/history');
var sendReport = require('./routes/sendReport');
var medicineTaking = require('./routes/medicineTaking');
var medicineTaking2 = require('./routes/medicineTaking2');
var medicineTaking3 = require('./routes/medicineTaking3');
var medicineTakingConfirm = require('./routes/medicineTakingConfirm');
var medicineTakingConfirmFinal = require('./routes/medicineTakingConfirmFinal');
var medicineTakingSymptoms = require('./routes/medicineTakingSymptoms');
var login = require('./routes/login');
var user = require('./routes/user');
var about = require('./routes/about');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/index', index.view);
app.get('/prescriptions',prescriptions.view);
app.get('/prescriptions2',prescriptions2.view);
app.get('/rxDescription/:name',rxDescription.view);
app.get('/refillVerification',refillVerification.view);
app.get('/refillVerification2',refillVerification2.view);
app.get('/refillVerification3/:name',refillVerification3.view);
app.get('/refillVerificationConfirmation',refillVerificationConfirmation.view);
app.get('/providerInfo',providerInfo.view);
app.get('/settings',settings.view);
app.get('/history',history.view);
app.get('/sendReport',sendReport.view);
app.get('/medicineTaking',medicineTaking.view);
app.get('/medicineTaking2',medicineTaking2.view);
app.get('/medicineTaking3',medicineTaking3.view);
app.get('/medicineTakingConfirm',medicineTakingConfirm.view);
app.get('/medicineTakingConfirmFinal',medicineTakingConfirmFinal.view);
app.get('/medicineTakingSymptoms',medicineTakingSymptoms.view);
app.get('/',login.view);
app.get('/user_login', user.login);
app.get('/user_logout', user.logout);
app.get('/users', user.list);
app.post('/settings/new', settings.addSymptom);
app.post('/providerInfo/new', providerInfo.addDoctor);
app.post('/providerInfo/delete', providerInfo.deleteDoctor);
app.post('/providerInfo/newp', providerInfo.addPharmacy);
app.post('/providerInfo/deletep', providerInfo.deletePharmacy);
app.post('/settings/delete', settings.deleteSymptom);
app.post('/prescriptions/new', prescriptions.addPrescription);
app.get('/about', about.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
