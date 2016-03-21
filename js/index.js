$(document).ready(function() {

	$('form').submit(addCity);
	

	function addCity (event) { 
		event.preventDefault();
		var city = $('#city-type').val();

		if (city === 'austin' || city === 'ATX' || city === 'Austin') { 
			$('body').addClass('austin');
			console.log('Austin!');
			$('form').trigger("reset");
		}
		else if (city === 'new york' || city === 'NYC') { 
			$('body').addClass('nyc');
			$('form').trigger("reset");
			console.log('New York!');
		}
		else if (city === 'los angeles' || city === 'LA') { 
			$('body').addClass('la');
			$('form').trigger("reset");
			console.log('Hollywood!');
		}
		else if (city === 'san francisco' || city === 'SF') { 
			$('body').addClass('sf');
			$('form').trigger("reset");
			console.log('San Fran!');
			
		}
		else if (city === 'Sydney' || city === 'SYD') { 
			$('body').addClass('sydney');
			$('form').trigger("reset");
			console.log('Sydney!');
		}
	}
});




/// first 5 line draft = 	$('#city-type').submit(addCity);
