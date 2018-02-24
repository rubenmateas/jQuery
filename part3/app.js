//When the image is clicked on it will fade out, the fade will last 1 second

$(function(){
'use strict';

  $('img').click(function(){
    $('img').fadeOut(1000);
  });

});
