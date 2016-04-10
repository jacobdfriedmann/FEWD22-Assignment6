
$(document).ready(function() {

	$('form').submit(displayCity);

	function displayCity(event) {
		event.preventDefault();

		var cityName = $('#city-type').val().toLowerCase();
		

		if(cityName === 'new york' || cityName === 'new york city' || cityName === 'nyc') {
			$('body').attr('class', 'nyc');
		} else 
		if(cityName === 'austin' || cityName === 'atx') {
			$('body').attr('class', 'austin');
		} else
		if(cityName === 'los angeles' || cityName === 'la' || cityName === 'lax') {
			$('body').attr('class', 'la');
		} else
		if(cityName === 'san francisco' || cityName === 'sf' || cityName === 'sfo') {
			$('body').attr('class', 'sf');
		} else 
		if(cityName === 'sydney' || cityName === 'syd') {
			$('body').attr('class', 'syd');
		}
		
	}

});