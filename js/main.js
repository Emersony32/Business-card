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

  // console.log(banner.numSlides);
});