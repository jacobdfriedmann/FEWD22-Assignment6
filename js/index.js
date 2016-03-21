$(document).ready(function() {

	$('form').submit(enterCity);

	function enterCity(event) {
		event.preventDefault();

		var userCity = $('#city-type').val();

		if(userCity === 'New York' || userCity === 'New York City' || userCity === 'NYC') {
			$('body').addClass('nyc');
		} else 
		if(userCity === 'Austin' || userCity === 'ATX') {
			$('body').addClass('austin');
		} else
		if(userCity === 'Los Angeles' || userCity === 'LA' || userCity === 'LAX') {
			$('body').addClass('la');
		} else
		if(userCity === 'San Fransisco' || userCity === 'SF' || userCity === 'Bay Area') {
			$('body').addClass('sf');
		} else 
		if(userCity === 'Sydney' || userCity === 'SYD') {
			$('body').addClass('sydney');
		}
		
	}

});