var images = ['bg.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];

// circle backgrounds
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

// resize the background image size wrt the window size
function resizeBg() {
  var aspectRatio = $('#bg').width() / $('#bg').height();
  if ( ($(window).width() / $(window).height()) < aspectRatio ) {
    $('#bg').removeClass('bgheight bgwidth').addClass('bgheight');
  } else {
    $('#bg').removeClass('bgheight bgwidth').addClass('bgwidth');
  }
};

$(document).ready(function(){
  resizeBg();

  // resize if window is changed
  $(window).resize(function(){
    resizeBg(); // change background img size
  });

  // main menu item click handler -> scrolls panels
  $('nav a').click(function(evt){
    evt.preventDefault();
    if (!$(this).hasClass('active')){
      $('nav a').removeClass('active');
      $(this).addClass('active');
      $.get($(this).attr('href'), function(data){
        $('#content').fadeOut(function(){
          $(this).html(data);
          $('.colorbox-image').colorbox({rel:'gallery', maxHeight:'90%', maxWidth:'90%'});
          $(this).fadeIn();
        });
      });
    }
  });

});