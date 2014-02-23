'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
// function initializePage() {
// 	console.log("Javascript connected!");
// 	$("a.newProjectSubmitButton").click(projectClick);

// 	function projectClick(e) {  
// 		// e.preventDefault();
// 		var projectTitle = $(this).find("p").text();
// 		$(this).text("Please Wait..."+projectTitle);
// 		console.log(projectTitle);
// 	}
// }

function initializePage() {
	console.log("Javascript connected!");
	// $("a.newProjectSubmitButton").click(projectClick);
	$("a.newProjectSubmitButton").click(function(e){

	// function projectClick(e) {  
		// e.preventDefault();
		var projectTitle = $(this).find("p").text();
		$(this).text("Please Wait..."+projectTitle);
		console.log(projectTitle);
		var url_call = 'rxDescription';

		function addMed(project_json){
		
			var new_html = '<p>'+projectTitle+" aweasd"+'</p>';
			var add_div = $('.details'+ '#'+projectTitle);
			add_div.html(new_html);

				// $.post('rxDescription', function() {
				// 	window.location.href = 'rxDescription';
				// });
			console.log(project_json);
		}
		$.get(url_call, addMed);
		//console.log("?????????"+project_json);

	});
}




