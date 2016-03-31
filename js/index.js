$(document).ready(function() {

	$('#entry').submit(doTheThing);
	// when the user submits the form with the ID entry, do the thing

	function doTheThing(event) {
		event.preventDefault();
		// prevent page reload upon form submission

		var city = $('#city-type').val().toLowerCase(); 
		// get the value of the user's input, convert it to lowercase, and put it in the variable "city"

		if (city === "nyc" || city === "new york city" || city === "new york") {
			$('body').attr('class', 'nyc');
			// if the user enters "nyc" OR "new york" OR "new york city", go get the element called body, apply the class attribute "nyc"
		} else if (city === "sf" || city === "san francisco" || city === "bay area") {
			$('body').attr('class', 'sf');
			// if the user enters "sf" OR "san francisco" OR "bay area", go get the element called body, apply the class attribute "sf"
		} else if (city === "la" || city === "los angeles" || city === "lax") {
			$('body').attr('class', 'la');
			// if the user enters "la" OR "los angeles", go get the element called body, apply the class attribute "la"
		} else if (city === "austin" || city === "atx") {
			$('body').attr('class', 'austin');
			// if the user enters "austin" OR "atx", go get the element called body, apply the class attribute "austin"
		} else if (city === "sydney" || city === "syd") {
			$('body').attr('class', 'sydney');
			// if the user enters "sydney" OR "syd", go get the element called body, apply the class attribute "sydney"
		}
	}
});