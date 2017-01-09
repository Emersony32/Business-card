$(document).ready(function(){

  var banner = {
    parent: $('#banner'),
    numSlides: $('#banner').children('.slide').length,
    position: 1
  }

  var info = {
    parent: $('#info'),
    numSlides: $('#info').children('.slide').length,
    position: 1
  }

  banner.parent.children('.slide').first().css({
    'left': 0
  });

  info.parent.children('.slide').first().css({
    'left': 0
  });  

  var heightBanner = function(){
    var altitude = banner.parent.children('.slide').outerHeight();

    banner.parent.css({
      'height': altitude + 'px'
    });
  }

  var heightInfo = function(){
    var altitude = info.parent.children('.active').outerHeight();

    info.parent.animate({
      'height': altitude + 'px'
    });
  }

  var heightContainer = function(){
    var heightWindow = $(window).height();

    if (heightWindow <= $('.container').outerHeight() + 200) {
      $('#container').css({
        'height': ''
      });
    } else {
        $('#container').css({
          'height': heightWindow + 'px'
        });
    };
  }

  heightBanner();
  heightInfo();
  heightContainer();

  $(window).resize(function() {
    heightBanner();
    heightInfo();
    heightContainer();
  });

  $('#info').children('.slide').each(function(){
    $('#buttons').append('<span>');
  });

  $('#buttons').children('span').first().addClass('active');

// ************* Banner ***********

  // Button next
  $('#banner-next').on('click', function(n){
    n.preventDefault();

    if(banner.position < banner.numSlides) {
      // Slides begin to the right
      banner.parent.children().not('.active').css({
        'left': '100%'
      });

      // Remove active class & put next element
      $('#banner .active').removeClass('active').next().addClass('active').animate({
        'left': '0'
      });

      // We animate previous slide toward left
      $('#banner .active').prev().animate({
        'left': '-100%'
      });

      banner.position += 1;
    } else {
      // Slide active (last), toward right
      $('#banner .active').animate({
        'left': '-100%'
      });

      // Select all slides that haven't active class
      banner.parent.children().not('.active').css({
        'left': '100%'
      });

      // Remove active class & put first element
      $('#banner .active').removeClass('active');
      banner.parent.children('.slide').first().addClass('active').animate({
        'left': 0
      });

      // Reset position to 1
      banner.position = 1;
    }
  });

  // Button previous
  $('#banner-prev').on('click', function(n){
    n.preventDefault();

    if (banner.position > 1) {

      banner.parent.children().not('.active').css({
        'left': '-100%'
      });

      $('#banner .active').animate({
        'left': '100%'
      });

      $('#banner .active').removeClass('active').prev().addClass('active').animate({
        'left': 0
      });

      banner.position -= 1;
    } else {
      banner.parent.children().not('.active').css({
        'left': '-100%'
      });

      $('#banner .active').animate({
        'left': '100%'
      });

      $('#banner .active').removeClass('active');
      banner.parent.children().last().addClass('active').animate({
        'left': 0
      });

      banner.position = banner.numSlides;
    }
  });

// ************* Info ***********

  // Button next
  $('#info-next').on('click', function(n){
    n.preventDefault();

    if(info.position < info.numSlides) {
      // Slides begin to the right
      info.parent.children().not('.active').css({
        'left': '100%'
      });

      // Remove active class & put next element
      $('#info .active').removeClass('active').next().addClass('active').animate({
        'left': '0'
      });

      // We animate previous slide toward left
      $('#info .active').prev().animate({
        'left': '-100%'
      });

      $('#buttons').children('.active').removeClass('active').next().addClass('active');

      info.position += 1;
    } else {
      // Slide active (last), toward right
      $('#info .active').animate({
        'left': '-100%'
      });

      // Select all slides that haven't active class
      info.parent.children().not('.active').css({
        'left': '100%'
      });

      // Remove active class & put first element
      $('#info .active').removeClass('active');
      info.parent.children('.slide').first().addClass('active').animate({
        'left': 0
      });

      $('#buttons').children('.active').removeClass('active');
      $('#buttons').children('span').first().addClass('active');

      // Reset position to 1
      info.position = 1;
    }

    heightInfo();

  });

  // Button previous
  $('#info-prev').on('click', function(n){
    n.preventDefault();

    if (info.position > 1) {

      info.parent.children().not('.active').css({
        'left': '-100%'
      });

      $('#info .active').animate({
        'left': '100%'
      });

      $('#info .active').removeClass('active').prev().addClass('active').animate({
        'left': 0
      });

      $('#buttons').children('.active').removeClass('active').prev().addClass('active');

      info.position -= 1;
    } else {
      info.parent.children().not('.active').css({
        'left': '-100%'
      });

      $('#info .active').animate({
        'left': '100%'
      });

      $('#info .active').removeClass('active');
      info.parent.children().last().addClass('active').animate({
        'left': 0
      });

      $('#buttons').children('.active').removeClass('active');
      $('#buttons').children('span').last().addClass('active');

      info.position = info.numSlides;
    }

    heightInfo();

  });

});