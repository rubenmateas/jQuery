//When the image is clicked on it will fade out, the fade will last 1 second

$(function(){
'use strict';

  $('#btn').click(function(){
    $('img').css('left', '0px')
            .animate({left: -100}, 2000, 'linear')
            .animate( { 'opacity' : .5 }, 250 );
  });

});
