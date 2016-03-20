
// - Call ```$('...').val()``` on inputs to get the string value of your user's input
// - Store user input in ```var city```
// - Use ```$('...').submit``` to figure out when the user clicks the "submit" button
// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Prevent a form submission using the ```event.preventDefault()``` function
// - Use the ```$(document).ready()``` handler to delay your code from executing until all DOM assets have been loaded
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code


$(document).ready(function() {

	
	$('form').submit(changeBackground); 

	function changeBackground(event) {
		event.preventDefault();

		var cityName = $('#city-type').val();
		console.log(cityName);

		if (cityName === 'new york' || cityName === 'ny' || cityName === 'nyc') {
    		console.log('newYork');
    		$('body').addClass('nyc');
    		this.reset();
		} else if (cityName === 'los angeles' || cityName === 'la' || cityName === 'lax') {
    		console.log('losAngeles');
    		$('body').addClass('la');
    		this.reset();
    	} else if (cityName === 'san francisco' || cityName === 'sf' || cityName === 'bay area') {
    		console.log('sanFrancisco');
    		$('body').addClass('sf');
    		this.reset();
    	} else if (cityName === 'austin' || cityName === 'atx') {
    		console.log('austin');
    		$('body').addClass('austin');
    		this.reset();
    	} else if (cityName === 'sydney' || cityName === 'syd') {
    		console.log('sydney');
    		$('body').addClass('sydney');
    		this.reset();
    	} else if (cityName === 'lagos' || cityName === 'lag') {
    		console.log('lagos');
    		$('body').addClass('lagos');
    		this.reset();
    	} else if (cityName === 'cape town' || cityName === 'cape') {
    		console.log('cape town');
    		$('body').addClass('cape');
    		this.reset();
    	}
	}

});




