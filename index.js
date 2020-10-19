$(function() {
  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass("fixed-position");
  });
});
