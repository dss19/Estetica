'use strict'
$(document).ready(function() {
  // кнопка гамбургер
  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    // $('.nav-menu').toggleClass('nav-menu_active');
  });
});