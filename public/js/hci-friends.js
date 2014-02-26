'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('#newSymptomSubmitButton').click(function(e) {
		var addedSymptom = $('#new-project-form #addSymptom').val();
		var json = {
			'addedSymptom': addedSymptom
		};
		$.post('/settings/new', json, function() {
			window.location.href = '/settings'; // reload the page
		});
	});

	$('.deleteSymptom').click(function(e) {
		var deleteSymptom = $(this).attr('id');
		var json = {
			'deleteSymptom': deleteSymptom
		};
		$.post('/settings/delete', json, function() {
			window.location.href = '/settings'; // reload the page
		});
	});
}





