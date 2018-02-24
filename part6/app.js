//When the image is clicked on it will fade out 50% and move left

$(function(){
'use strict';

  $('#btn').click(function(){
    $('img').animate({'margin-left': 500})
            .animate( { 'opacity' : .5 }, 250, 'linear' );
  });

});
