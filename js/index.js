// listen to form submit event and make sure page doesn't refresh
// grab value out of input field
// make a decision: is that city NYC, if it is, change background, else - if that city is LA, change bg to LA
$(document).ready(function() {

	$('form').submit(addEntry);

	function addEntry(event) {
		event.preventDefault();
		var userInput = $('#city-type').val();
		console.log(userInput)
		if (userInput==='austin' || userInput==='Austin') {
			 $('body').addClass('austin');
			 }
	 	if (userInput==='sf' || userInput==='SF') {
			 $('body').addClass('sf');
			 } 
	 	if (userInput==='la' || userInput==='LA') {
	 		$('body').addClass('la');
			} 
	 	if (userInput==='sydney' || userInput==='Sydney') {
		 	$('body').addClass('sydney');
			 } 
	 	if (userInput==='NYC' || userInput==='nyc') {
			 $('body').addClass('nyc');
			  

		}
		
	}});