$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
  $('.mobile-nav-icon').click(function () {
    $('.main-nav').slideToggle(200);
    var icon = $('.js-nav-icon i');
    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });
});
