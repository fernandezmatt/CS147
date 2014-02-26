'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('#newSymptomSubmitButton').click(function(e) {
		var addedSymptom = $('#new-project-form #addSymptom').val();
		console.log("fucccccck");
		var json = {
			'addedSymptom': addedSymptom
		};
		$.post('/settings/new', json, function() {
			window.location.href = '/settings'; // reload the page
		});
	});

	$('.deleteSymptom').click(function(e) {
		var deleteSymptom = $('.symptomNameinHeader').val();
		//var deleteSymptom = $(this).text();
		console.log(deleteSymptom);
		// var json = {
		// 	'deleteSymptom': deleteSymptom
		// };
		// $.post('/settings/delete', json, function() {
		// 	window.location.href = '/settings'; // reload the page
		// });
	});
}





