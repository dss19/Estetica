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
  
  // var mySwiper2 = new Swiper ('.slider2', {
  //   // Optional parameters    
  //   loop: true,
  //   navigation: {
  //     nextEl: '.button-next_light',
  //     prevEl: '.button-prev_light',
  //   },
  //   thumbs: {
  //     swiper: {
  //       el: '.swiper-container-thumbs',
  //       slidesPerView: 6,        
  //     }
  //   }
  // });
});