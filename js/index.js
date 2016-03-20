$(document).ready(function() {

	$('form').submit(addCity);

	function addCity(event) {
		event.preventDefault();
		var city = $('#city-type').val();
		console.log(city);

		if (city === 'New York City' || city === 'NYC' || city === 'New York') {
			$('body').addClass('nyc');
			console.log('NYC Background')
		}
		if (city === 'LA' || city === 'LAX' || city === 'Los Angeles') {
			$('body').addClass('la');
			console.log('LA Background')
		}
		if (city === 'SF' || city === 'San Francisco' || city === 'Bay Area') {
			$('body').addClass('sf');
			console.log('SF Background')
		}
		if (city === 'Austin' || city === 'ATX') {
			$('body').addClass('austin');
			console.log('Austin Background')
		}
		if (city === 'Sydney' || city === 'SYD') {
			$('body').addClass('sydney');
			console.log('Sydney Background')
		}
	}
	console.log('Changed background')

});

