var num_of_button = $(".button").length;
var num_of_tbutton = $(".t_button").length;

$(document).ready(function(){
  $("div#start_text").mouseenter(function(){
    for (var i = 0; i < num_of_button; i++) {
      reactor("d" + i);
    }
    for (var i = 0; i < num_of_tbutton; i++) {
      textbox_reactor("t" + i);
    }
    $("div#start_text").animate({opacity: 0}, 100);
      $("video").each(function(index, element){
        this.play();
      }
    );
  })
});

function reactor(name){
    $("#"+name).mouseenter(function(){
      var cur_vid = $(".video_visible").attr('id');
      var vid_name = name.replace("d","vid_");
      if(cur_vid != vid_name){
        $(".video_visible").stop(true).animate({opacity: 0, volume: 0}, 2000).attr('class','video video_invisible');
        $("#" + vid_name).attr('class','video video_visible').stop(true).animate({opacity: 1, volume: 1}, 2000);
      }
    });
}

function textbox_reactor(name){
  $("#"+name).hover(function(){
    var box_name = name.replace("t","text_");
    $("#" + box_name).toggleClass("textbox_seen");
  });
}
