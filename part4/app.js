$(function(){
'use strict';

	//Gives an error message bellow the input
	$('#name').on('change', function() {
		$('#bad').html('Oh no, an error occured');
	});

	//Makes the phone input required
	$('#phone').prop('required',true);

	//Whatever is entered into the color input is a Good Choice!
	$('#color').on('change', function() {
		$('#good').html('Good Choice!');
	});

});
