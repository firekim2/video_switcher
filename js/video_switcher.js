var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function(){
    $(".video_invisible").animate({volume: 0},1);
    if (isMobile){
      $('body').append('<script type=\"text\/javascript\" src=\'js\/video_switcher_touch.js\'><\/script>');
    }
    else {
      $('body').append('<script type=\"text\/javascript\"  src=\'js\/video_switcher_mouse.js\'><\/script>');
    }
});
