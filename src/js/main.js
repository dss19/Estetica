'use strict'
$(document).ready(function() {
  // кнопка гамбургер, меню
  $('.header-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('header-btn_active');
    $('.menu').toggleClass('menu_active');
  });

  // слайдер
  var mySwiper1 = new Swiper ('.slider1', {
    // Optional parameters    
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    // spaceBetween: 2,
    slidesPerView: 6,
    // loop: true,
    freeMode: false,        
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: '.button-next_light',
      prevEl: '.button-prev_light',    
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  
  // fancybox
  $('[data-fancybox="gallery"]').fancybox({
    thumbs : {
      autoStart : true
    },
    loop: true,
  });

  // Modal
  $('.btn').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('modal_active');
  });

  $('.modal-dialog-close').on('click', function() {
    $('.modal').removeClass('modal_active');
  });

  // Popup
  $('.advantages-item').on('click', function() {    
    $('.advantages-wrap-popup').toggleClass('advantages-wrap-popup_active');
    let target = $(this).attr('data-target');
    $('.popup-inner').hide();
    $('#' + target).show();    
  });

  $('.popup__close').on('click', function() {
    $('.advantages-wrap-popup').removeClass('advantages-wrap-popup_active');
  });

  // скролл
  $('.menu__link').on('click', function () {    
    $('.menu').removeClass('menu_active');
    $('.header-btn').removeClass('header-btn_active');
    let scr = $(this).attr('href');        
    $('body,html').animate({
      scrollTop: $(scr).offset().top
    }, 700);
  });  
});