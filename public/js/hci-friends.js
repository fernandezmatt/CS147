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

	$('#newMedicineSubmitButton').click(function(e) {
		console.log('clicked');
		var MedName = $('#new-project-form #MedName').val();
		var Phoentical = $('#new-project-form #Phoentical').val();
		var Info = $('#new-project-form #Info').val();
		var Morningtime = $('#new-project-form #Morning-time').val();
		var Eveningtime = $('#new-project-form #Evening-time').val();
		var Foodinfo = $('#new-project-form #Food-info').val();
		var Lastrefill = $('#new-project-form #Last-refill').val();
		var Nextrefill = $('#new-project-form #Next-refill').val();
		var Warning = $('#new-project-form #Warning').val();
		var json = {
			"MedName": MedName,
			"Phoentical": Phoentical,
			"Info": Info,
			"Morningtime": Morningtime,
			"Eveningtime": Eveningtime,
			"Foodinfo": Foodinfo,
			"Lastrefill": Lastrefill,
			"Nextrefill": Nextrefill,
			"Warning": Warning
		};
		$.post('/prescriptions/new', json, function() {
			window.location.href = '/prescriptions'; // reload the page
		});
	})



}





