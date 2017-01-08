$(document).ready(function(){

  var banner = {
    parent: $('#banner'),
    numSlides: $('#banner').children('.slide').length,
    position: 1
  }

  banner.parent.children('.slide').first().css({
    'left': 0
  });

  var heightBanner = function(){
    var altitude = banner.parent.children('.slide').outerHeight();

    banner.parent.css({
      'height': altitude + 'px'
    });
    console.log(altitude);
  }

  heightBanner();

  $(window).resize(function() {
    heightBanner();
  });

// ************* Banner ***********

  // Button next
  $('#banner-next').on('click', function(n){
    n.preventDefault();

    if(banner.position < banner.numSlides) {

      banner.parent.children().not('.active').css({
        'left': '100%'
      });

      $('#banner .active').removeClass('active').next().addClass('active').animate({
        'left': '0'
      });

      $('#banner .active').prev().animate({
        'left': '-100%'
      });

      banner.position += 1;
    } else {

      $('#banner .active').animate({
        'left': '-100%'
      });

      banner.parent.children().not('.active').css({
        'left': '100%'
      });

      $('#banner .active').removeClass('active');
      banner.parent.children('.slide').first().addClass('active').animate({
        'left': 0
      });

      banner.position = 1;
    }

  });

  // console.log(banner.numSlides);
});