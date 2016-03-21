$(document).ready(function() {


	$('form').submit(displayImage); //When the Form tag is submitted call the displayImage function

	function displayImage(event) { //this is what the displayImage function does
		event.preventDefault(); //don't let the page refresh when the form is submitted
		var userInput = $('#city-type').val();
		console.log(userInput);

		if(userInput=='nyc' || userInput=='new york' || userInput=='new york city') //If the user enters 'nyc'
		{
			$('body').css('background-image','url(images/nyc.jpg)');
		}
		else if(userInput=='dc' || userInput=='washington dc' || userInput=='washington') //If the user enters 'dc'
		{
			$('body').css('background-image','url(images/dc.jpg)');
		}
		else if(userInput=='la' || userInput=='los angeles') //If the user enters 'la'
		{
			$('body').css('background-image','url(images/la.jpg)');
		}
		else if(userInput=='austin') //If the user enters 'austin'
		{
			$('body').css('background-image','url(images/austin.jpg)');
		}
		else if(userInput=='sydney') //If the user enters 'sydney'
		{
			$('body').css('background-image','url(images/sydney.jpg)');
		}
		else if(userInput=='san francisco' || userInput==='bay area' || userInput==='SF') //If the user enters 'san francisco'
		{
			$('body').css('background-image','url(images/sf.jpg)');
		}
	}	
;
})