//When you click on the images a slideshow pops up and cycles through the images
//The HTML and CSS will be broken because the file would be far too large if I
// included what the excersize files have.

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
