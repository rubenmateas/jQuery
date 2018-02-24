//When you click on the images a slideshow pops up and cycles through the images
//The HTML and CSS will be broken because the file would be far too large if I
// included what the excersize files have.
// If you would like to see the script in action, copy and paste the code from
// this file into the chapter 4 part 4 excersize file script.js

$(function() {
"use strict";

	var $flowers = $('#flower-items');

	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
    		'maxWidth' : '60%',
				'transition' : 'fade',
				'speed' : 150,
				'opacity' : 0.7,
				'slideshow' : true,
				'slideshowSpeed' : 3000,
				'current' : 'arrangement {current} of {total}'
    	});
});
