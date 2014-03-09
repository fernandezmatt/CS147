// Get all of our friend data
//var data = require('../userData.json');


exports.view = function(req, res){
	res.render('index',{
		username: req.session.username
	});
};		

// $(document).load(function() {
// var enterTime = new Date();
// $("#record-btn").click(function(e) {
// 		console.log(enterTime);
// 		ga('send', 'event', 'button', 'click', $(this).attr('id'), new Date() - enterTime);
// 	})

// 	$("#prescription").click(function(e){
// 		console.log('clicked');
// 		ga('send', 'event', 'button', 'click', $(this).attr('id'), new Date() - enterTime);
// 	});

// 	$("#symptoms").click(function(e){
// 		console.log('clicked');
// 		ga('send', 'event', 'button', 'click', $(this).attr('id'), new Date() - enterTime);
// 	});

// 	$("#provider").click(function(e){
// 		console.log('clicked');
// 		ga('send', 'event', 'button', 'click', $(this).attr('id'), new Date() - enterTime);
// 	});

// 	$("#history").click(function(e){
// 		console.log('clicked');
// 		ga('send', 'event', 'button', 'click', $(this).attr('id'), new Date() - enterTime);
// 	});
// });