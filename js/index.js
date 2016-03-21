$(document).ready(function(){

	$('#city-entry').submit(cityEntry);
	// when form is submitted, run function city entry

	function cityEntry(event) {
		event.preventDefault();
		// prevent page from refreshing after entry
		var city = $('#city-type').val();
		// store the value of user input from city entry form as variable city

		if (city === 'New York' || city === 'New York City' || city === 'NYC' || city === 'new york' || city === 'new york city' || city === 'nyc') {
		// if variable city matches any of these new york names	
			$('body').css('background', 'url(../FEWD22-Assignment6/images/nyc.jpg)');	
		// change background to new york image
			$('#city-type').val('');
		// clear city input
		}


		else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf' || city === 'bay area') {
		// if variable city matches any of these san fran names	
			$('body').css('background', 'url(../FEWD22-Assignment6/images/sf.jpg)');
		// change background to san fran image
			$('#city-type').val('');
		// clear city input
		}

		else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
		// if variable city matches any of these la names	
			$('body').css('background', 'url(../FEWD22-Assignment6/images/la.jpg)');
		// change background to la image
			$('#city-type').val('');
		// clear city input
		}

		else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
		// if variable city matches any of these austin names
			$('body').css('background', 'url(../FEWD22-Assignment6/images/austin.jpg)');
		// change background to austin image
			$('#city-type').val('');
		// clear city input
		}

		else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
		// if variable city matches any of these sydney names
			$('body').css('background', 'url(../FEWD22-Assignment6/images/sydney.jpg)');
		// change background to sydney image
			$('#city-type').val('');
		// clear city input
		}

		else if (city === 'DC' || city === 'Washington' || city === 'Washington DC' || city === 'D.C.' || city === 'Washington, DC' || city === 'Washington, D.C.' || city === 'dc' || city === 'washington' || city === 'washington dc' || city === 'd.c.' || city === 'washington, dc' || city === 'washington, d.c.') {
		// if variable city matches any of these dc names
			$('body').css('background', 'url(../FEWD22-Assignment6/images/dc.jpg)');
		// change background to dc image
			$('#city-type').val('');
		// clear city input
		}

		else {
			$('#city-type').val('city not found, try new city');
		// cities not listed, display error message	
		}

	}

});