$(document).ready(function() {

	//Set up variable to capture user input

	var city= "none";

	//Determine when user hits submit button

	$('#myForm').submit(changeBackground);

	function changeBackground(event){

		//Stop page from reloading on submit
		event.preventDefault();

		//Get user input
		var city = $('#city-type').val();


		/*Match user input to determined keywords for cities and change 
		background image to the specified city */
		if(city==='New York'||city==='New York City'||city==='NYC'){
		$('body').css('background', 'url(images/nyc.jpg)');
		} else if(city==='SF' || city==="San Fransisco" || city==="Bay Area"||city==="san fransisco"){
			$('body').css('background', 'url(images/sf.jpg)');
		} else if(city==='Austin'||city==='ATX'){
			$('body').css('background', 'url(images/austin.jpg)');
		}else if(city==='Los Angeles'||city==='LA'||city==='LAX'){
			$('body').css('background', 'url(images/la.jpg)');
		} else if(city==='Sydney'||city==='SYD'){
			$('body').css('background', 'url(images/sydney.jpg)');
		}
		//If no city keywords match, change background image to generic image
		else{
			$('body').css('background', 'url(images/citipix_skyline.jpg)');
			alert("Not a valid city. Please try again.")
		}

		//Format picture to cover the entire page
		$('body').css('background-size', 'cover');

		//Reset input box
		$('#city-type').val('');
	}

});