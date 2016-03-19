$(document).ready(function() {

	var cityAustin = true if 
	var cityLA = true
	var citySF = true
	var citySydney = true

	$('#city-type').submit(addEntry)

	function addEntry (event) {
		event.preventDefault();
	
	var userInput = $('#newEntry').val();
			if (citySF) {
				$('body').addClass('austin');
			}
			if (cityLA) {
				$('body').addClass('la')
			}

			if (cityAustin) {
				$('body').addClass('austin')
			}

			if (citySydney) = true {
				$('body').addClass('Sydney')
			}
	
});


			

