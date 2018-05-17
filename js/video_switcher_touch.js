var num_of_button = $(".button").length;
var num_of_tbutton = $(".t_button").length;

$(document).ready(function(){
    $("body").on("touchmove", function(e){
        triggerReactor(e)
    });
    $("div#start_text").on("touchstart",function(){
      for (var i = 0; i < num_of_button; i++) {
        reactor("d" + i);
      }
      for (var i = 0; i < num_of_tbutton; i++) {
        textbox_reactor("t" + i);
      }
      $("div#start_text").animate({opacity: 0}, 100);
      $("video").each(function(index, element){
          this.play();
      });
    });
});

function triggerReactor(e){
  e = e.originalEvent.changedTouches[0];
  for (var i = 0; i < num_of_button; i++) {
    var left = $(".button")[i].offsetLeft;
    var right = left + $(".button")[i].offsetWidth;
    var top = $(".button")[i].offsetTop;
    var bottom = top + $(".button")[i].offsetHeight;
    if (e.clientX > left && e.clientX < right && e.clientY > top && e.clientY < bottom) {
      $('#'+$(".button")[i].id).trigger('touchtouch');
    }
  }
  for (var i = 0; i < num_of_tbutton; i++) {
    var left = $(".t_button")[i].offsetLeft;
    var right = left + $(".t_button")[i].offsetWidth;
    var top = $(".t_button")[i].offsetTop;
    var bottom = top + $(".t_button")[i].offsetHeight;
    if (e.clientX > left && e.clientX < right && e.clientY > top && e.clientY < bottom) {
      $('#'+$(".t_button")[i].id).trigger('texttouch');
    }
    else {
      $('#'+$(".t_button")[i].id).trigger('texttouch_unseen');
    }
  }
}

function reactor(name){
  $("#"+name).bind('touchtouch',function (e) {
    var cur_vid = $(".video_visible").attr('id');
    var vid_name = name.replace("d","vid_");
    if(cur_vid != vid_name){
      $(".video_visible").stop(true).animate({opacity: 0, volume: 0}, 2000).attr('class','video video_invisible');
      $("#" + vid_name).attr('class','video video_visible').stop(true).animate({opacity: 1, volume: 1}, 2000);
    }
  });
}

function textbox_reactor(name){
  $("#"+name).bind('texttouch',function (e) {
    var box_name = name.replace("t","text_");
    $("#" + box_name).toggleClass("textbox_seen", true);
  });
  $("#"+name).bind('texttouch_unseen',function (e) {
    var box_name = name.replace("t","text_");
    $("#" + box_name).toggleClass("textbox_seen", false);
  });
}
