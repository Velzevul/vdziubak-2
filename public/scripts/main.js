var images = ['bg.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];

setInterval(function(){
  var random_no;
  $('#bg').fadeOut('normal', function(){
    random_no = Math.floor(images.length*Math.random());
    do{
      random_no = Math.floor(images.length*Math.random());
    }while('images/' + images[random_no] == $(this).attr('src'))
    this.src = 'images/' + images[random_no];
    $('#bg').fadeIn(1000);
  });
  },
  15000);

$(document).ready(function(){
  var bgimg = $('#bg'); // background image element

  //===== initialization ======
  // ---- customize scrollbar ----
  var settings = {
    autoReinitialise: false
  };
  var pane = $('.custom-scrollbar')
  pane.jScrollPane(settings);
  var api = pane.data('jsp');
  // ----
  resizeBg(); // resize background
  bgimg.fadeIn(1000); // fadeIn background for homepage
  // force caching of all background images
  $.each(images, function (i, val) {
    $('<img/>').attr('src', '/images/' + val);
  });
  //===== end initialization =====

  // resize the background image size wrt the window size
  function resizeBg() {
    var aspectRatio = bgimg.width() / bgimg.height();
    if ( ($(window).width() / $(window).height()) < aspectRatio ) {
      bgimg.removeClass('bgheight bgwidth').addClass('bgheight');
    } else {
      bgimg.removeClass('bgheight bgwidth').addClass('bgwidth');
    }
  };

  // resize if window is changed
  $(window).resize(function(){
    resizeBg(); // change background img size
    api.reinitialise(); // reinitialise custom scroller
  });

  // brouser font size change handler
  $(document).bind("fontresize", function (event, data) {
    api.reinitialise(); // reinitialise custom scroller
  });

  // main menu item click handler -> scrolls panels
  $('#topbar span').click(function(evt){
    evt.preventDefault();
    if (!$(this).hasClass('active')){
      $('#topbar span').removeClass('active');
      $(this).addClass('active');
      $('.st-panel').removeClass('left2 left1 center right1 right2')
      switch(this.id){
        case 'switch-1':
          $('#cv').addClass('center');
          $('#home').addClass('right1');
          $('#portfolio').addClass('right2');
          break;
        case 'switch-2':
          $('#cv').addClass('left1');
          $('#home').addClass('center');
          $('#portfolio').addClass('right1');
          break;
        case 'switch-3':
          $('#cv').addClass('left2');
          $('#home').addClass('left1');
          $('#portfolio').addClass('center');
          break;
      }
    }
  });

  // cv section link click - ajax loading of content
  $('.menu a').click(function(evt){
    evt.preventDefault();
    if (!$(this).hasClass('active')){
      $('.menu a').removeClass('active');
      $(this).addClass('active');
      $.ajax({url: '/' + this.id,
              success: function(data) {
                $('.content').fadeOut('fast',function(){
                  api.getContentPane().html(data);
                  $(this).fadeIn();
                  api.reinitialise();
                })
              }
            })
    }
  });

});