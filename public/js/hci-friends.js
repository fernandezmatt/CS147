'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

// function listenerFunction(e){
	// e.preventDefault();
	//var medName = $(this).closest('.project').attr('id');



	$('#newProjectSubmitButton').click(function(e) {
		console.log('clicked');
		//var title = $('#title').val();


	
		// $.post('../../views/rxDescription', json, function() {
		// 	window.location.href = '/'; // reload the page
		// });
	});
// }

}


