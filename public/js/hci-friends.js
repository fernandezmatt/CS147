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
	});

	$('#newDoctorSubmitButton').click(function(e) {
		console.log('clicked');
		var DocName = $('#new-project-form #DocName').val();
		var DocAddress1 = $('#new-project-form #DocAddress1').val();
		var DocAddress2 = $('#new-project-form #DocAddress2').val();
		var DocNumber = $('#new-project-form #DocNumber').val();
		var json = {
			"DocName": DocName,
			"DocAddress1": DocAddress1,
			"DocAddress2": DocAddress2,
			"DocNumber": DocNumber
		};
		$.post('/providerInfo/new', json, function() {
			window.location.href = '/providerInfo'; // reload the page
		});
	});

	$('#newPharmacySubmitButton').click(function(e) {
		console.log('clicked');
		var PharmacyName = $('#new-project-form #PharmacyName').val();
		var PharmacyAddress1 = $('#new-project-form #PharmacyAddress1').val();
		var PharmacyAddress2 = $('#new-project-form #PharmacyAddress2').val();
		var PharmacyNumber = $('#new-project-form #PharmacyNumber').val();
		var json = {
			"PharmacyName": PharmacyName,
			"PharmacyAddress1": PharmacyAddress1,
			"PharmacyAddress2": PharmacyAddress2,
			"PharmacyNumber": PharmacyNumber
		};
		$.post('/providerInfo/newp', json, function() {
			window.location.href = '/providerInfo'; // reload the page
		});
	});

	$('.deletePharmacy').click(function(e) {
		var deletePharmacy = $(this).attr('id');
		var json = {
			'deletePharmacy': deletePharmacy
		};
		$.post('/providerInfo/deletep', json, function() {
			window.location.href = '/providerInfo'; // reload the page
		});
	});

	$('.deleteDoctor').click(function(e) {
		var deleteDoctor = $(this).attr('id');
		var json = {
			'deleteDoctor': deleteDoctor
		};
		$.post('/providerInfo/delete', json, function() {
			window.location.href = '/providerInfo'; // reload the page
		});
	});

}





