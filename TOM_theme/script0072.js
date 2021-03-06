jQuery(document).ready(function($) {
  $('.wrap-slider').owlCarousel({
    items: 2,
    dots: true,
    nav: false,
    animateOut: 'fadeOut',
    smartSpeed:450,
    autoplay: true,
    responsive : {
      1025 : {
        items: 4
      }
    }
  });
  $('.carousel').imagesLoaded(function() {
    $('.carousel').owlCarousel({
      items: 1,
      dots: true,
      nav: false,
      smartSpeed:450,
      autoplay: false
    });
  })

  $('.menu-mobile').click(function(event) {
    event.preventDefault();
    $('body').toggleClass('menu-opened');
  });

  $('.to-top').click(function(event) {
    event.preventDefault();
    $(window).scrollTo('body', 500)
  });

  $('.scroll-to').click(function(event) {
    event.preventDefault();
    var target = $(this).data('target');
    $(window).scrollTo(target, 500, {
      offset: -50
    })
  });

  $('.tab-links').find('a').click(function(event) {
    event.preventDefault();
    var elem = $(this);
    var target = elem.data('target');
    elem.parent().find('a').removeClass('active');
    elem.addClass('active');
    elem.parent().next().find('.tab-detail').removeClass('current');

    if(elem.hasClass('tab-weapon')) {
      $('.weapon-tab-detail').removeClass('current');
      $(target).find('.weapon-detail').removeClass('current');
      $(target).find('.weapon-detail:first-child').addClass('current');
    }

    $(target).addClass('current')
  });

  $('.wrap-weapon-thumb').click(function(event) {
    event.preventDefault();
    var elem   = $(this);
    $('.wrap-weapon-thumb').removeClass('active');
    elem.addClass('active')
    var target = elem.data('target');
    $('.weapon-detail').removeClass('current');
    $(target).addClass('current');
  });

  $('.scrollbar-inner').scrollbar();

  $('.open-modal').click(function(event) {
    event.preventDefault();
    var target = $(this).data('target');
    $(target).modal('show');
  });
  $(window).scroll(function(event) {
    if($(window).scrollTop() > 10) {
      $('body').addClass('menu-fixed')
    } else {
      $('body').removeClass('menu-fixed')
    }
  });
  $(window).trigger('resize');
})
jQuery(window).resize(function(event) {

});

AOS.init();
