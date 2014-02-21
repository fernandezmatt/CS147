'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

$(".friend a").click(listenerFunction);


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

function listenerFunction(e){
	e.preventDefault();
	var oldText = $(this).text();
	oldText = oldText.trim();
	var newText = anagrammedName(oldText);
	$(this).text(newText);
}



