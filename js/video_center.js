var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function(){
  video_center();
});

$(window).resize(function(){
  video_center();
});

function video_center() {
  var size_of_window = $("body").width();
  var size_of_video = parseInt($("video").css("height")) * 16 / 9;
  $("video").css({"left": size_of_window/2 - size_of_video/2});
}
