'use strict'
$(document).ready(function() {
  // кнопка гамбургер, меню
  $('.hamburger-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('hamburger-btn_active');
    $('.menu').toggleClass('menu_active');
  });
});