$(document).ready(function() {

	$('form').submit(addEntry);

	function addEntry (event) {
		event.preventDefault();

	var input = $('#city-type').val();

		if(input === 'San Fransisco') {
			$('body').addClass('.sf');
			
		} else if (input === 'Austin') {
			$('body').addClass('austin');
			
		} else if (input === 'New York') {
			$('body').addClass('nyc');

		} else if (input === 'Sydney') {
			$('body').addClass('sydney');

		} else if (input === 'Los Angeles') {
			$('body').addClass('la');
		}

	}

	
});


			

