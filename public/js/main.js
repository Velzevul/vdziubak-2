$(document).ready(function(){

  setRowsHeight();

  // initialize
  $('#bg').load(function(){
    resizeBg(); // resize background
  });
  
  function resizeBg() {
    var bgimg = $('#bg');
    var aspectRatio = bgimg.width() / bgimg.height();
    if ( ($(window).width() / $(window).height()) <= aspectRatio ) {
      bgimg.removeClass('bgheight bgwidth').addClass('bgheight');
    } else {
      bgimg.removeClass('bgheight bgwidth').addClass('bgwidth');
    }
  };
  
  function setRowsHeight() {
    //for large displays, set heights of rows to 28% of screen height
    var wh = $(window).height();
    $(".one-row").each(function(i){
      if ($(this).children('p').length == 0 || $(this).height('auto').innerHeight() <= wh*0.28){
        $(this).innerHeight(wh*0.28)
      }
      else{
        $(this).height("auto")
      }
    });
    
    $(".two-rows").each(function(i){
      if ($(this).children('p, h2, h3').length == 0 || $(this).height('auto').innerHeight() <= wh*0.56 + 10){
        $(this).innerHeight(wh*0.56 + 10)
      }
      else{
        $(this).height("auto")
      }
    });
  };

  // resize if window is changed
  $(window).resize(function(){
    resizeBg();
    setRowsHeight();
  });

  $('.carousel').carousel({
    interval: false
  })

  $('.colorbox').colorbox({
    maxHeight:'90%', 
    maxWidth:'90%'
  });

});