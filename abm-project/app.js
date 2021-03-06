
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var prescriptions = require('./routes/prescriptions');
var prescriptions2 = require('./routes/prescriptions2');
var providerInfo = require('./routes/providerInfo');
var settings = require('./routes/settings');
var history = require('./routes/history');
var sendReport = require('./routes/sendReport');
var medicineTaking = require('./routes/medicineTaking');
var medicineTaking2 = require('./routes/medicineTaking2');
var medicineTaking3 = require('./routes/medicineTaking3');
var medicineTakingConfirm = require('./routes/medicineTakingConfirm');
var medicineTakingSymptoms = require('./routes/medicineTakingSymptoms');
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
app.get('/', index.view);
app.get('/prescriptions',prescriptions.view);
app.get('/prescriptions2',prescriptions2.view);
app.get('/providerInfo',providerInfo.view);
app.get('/settings',settings.view);
app.get('/history',history.view);
app.get('/sendReport',sendReport.view);
app.get('/medicineTaking',medicineTaking.view);
app.get('/medicineTaking2',medicineTaking2.view);
app.get('/medicineTaking3',medicineTaking3.view);
app.get('/medicineTakingConfirm',medicineTakingConfirm.view);
app.get('/medicineTakingSymptoms',medicineTakingSymptoms.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
