'use strict'
$(document).ready(function() {
  // кнопка гамбургер, меню
  $('.header-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('header-btn_active');
    $('.menu').toggleClass('menu_active');
  });
});