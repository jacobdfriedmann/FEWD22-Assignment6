//Psuedocode:
//use jQuery to change the image background based on specific names upon submission
//initially make the script wait for the document to be ready
//and make the form wait for the "submit" or enter so the page doesn't reload
//take the city input and save it as a value
//use the city input to change the background image
//if the city doesn't exist keep background as is and alert the end user

//wait to run until the document is ready
$(document).ready(function(){

//when someone hits submit it runs the function addCity  
    $('form').submit(addCity);

//create function addCity to a) stop form from being submited using an argument "event"
    function addCity(event) {
    	event.preventDefault();

//in the function create a variable called "city" which stores the city "value" submitted
    	var city = $('#city-type').val();

//use "city" value to find out if it should equal New York "or" NYC "or" New York City (all the other cities too) then 
//change class of body to change background image based on city 

		if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
			$('body').removeClass('starter-image').addClass('nyc');
		} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf' || city === 'bay area') {
			$('body').removeClass('starter-image').addClass('sf');
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').removeClass('starter-image').addClass('la');
		} else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
			$('body').removeClass('starter-image').addClass('austin');
		} else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
			$('body').removeClass('starter-image').addClass('sydney');
		} else if (city === 'Chicago' || city === 'CHI' || city === 'chicago' || city === 'chi') {
			$('body').removeClass('starter-image').addClass('chicago');
		} else if (city === 'Denver' || city === 'DEN' || city === 'Mile High City' || city === 'denver' || city === 'den' || city === 'mile high city') {
			$('body').removeClass('starter-image').addClass('denver');	
		} else {
			$('body').addClass('starter-image');
			alert('We have no pictures of this city, please send us some!');
			//Asking end user to send us images if their city picture doesn't appear
		}

    }

  });
