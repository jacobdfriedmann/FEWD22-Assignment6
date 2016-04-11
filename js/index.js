$(document).ready(function() {
	
	$('#cityForm').submit(enterCity);

	function enterCity(event) {
		event.preventDefault();

		var city = $('#city-type').val();

			if (city==='New York'||city==='NYC'||city==='New York City'){
				$('body').attr('class','nyc');
			} 

			else if (city==='San Francisco'||city==='SF'||city==='Bay Area'){
				$('body').attr('class','sf');
			} 

			else if (city==='Los Angeles'||city==='LA'||city ==='LAX'){
				$('body').attr('class','la');
			} 

			else if (city==='Austin'||city==='ATX'){
				$('body').attr('class','austin');
			} 

			else if (city==='Sydney'||city==='SYD'){
				$('body').attr('class','sydney');
			} 


		$('#city-type').val(' ');

	}


});