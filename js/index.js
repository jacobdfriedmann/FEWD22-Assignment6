$(document).ready(function() {
	//waits for document to fully load to start function
	$('form').submit(addCity);

	function addCity (event) {
		event.preventDefault();

		var varcity = $('#city-type').val();

		if (varcity === "NYC" || varcity === "New York City" ||varcity === "New York") {
			
			$('body').addClass('nyc');
			console.log('nyc');
			//changes background to nyc pic
		}

		if (varcity === "SF" || varcity === "San Francisco" || varcity === "Bay Area") {
			
			$('body').addClass('sf');
			console.log('sf');
			// changes background to sanfran pic
		}
		if (varcity === "LA" || varcity === "Los Angeles" || varcity === "LAX") {
			
			$('body').addClass('la');
			console.log('LA');
			//changes background to LA pic
		}
		if (varcity === "Austin" || varcity === "ATX") {
			
			$('body').addClass('austin');
			console.log('austin');
			//changes background to Austin pic
		}
		if (varcity === "Sydney" || varcity === "SYD") {
			
			$('body').addClass('sydney');
			console.log('sydney');
			//changes background pic to Sydney pic
		}

		
	}
})

