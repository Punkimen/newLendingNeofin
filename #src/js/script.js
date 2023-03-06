"use strict";// header
(function () {

  function changeHeader() {
    const windowWidth = $(window).width();

    if (windowWidth <= 767) {
      $('.header-mobile__wrapper').prepend($('.header__menu'))
    } else {
      $('.header__logo').after($('.header__menu'))
    }
  }
  changeHeader()
  $(window).on('resize',function () {
    changeHeader()
    createBtnChangePos()
  })

  $('.burger__icon').on('click',function () {
    $(this).toggleClass('active');
    $('.header-mobile').slideToggle()
  })

  $('.user__btn').on('click',function () {
    $(this).toggleClass('active')
    $('.user-menu').slideToggle()
  })

  function createBtnChangePos() {
    if ($('.header__btn_create-project').length > 0) {
      const windowWidth = $(window).width();
      if (windowWidth <= 992) {
        $('.user-menu').append($('.header__btn_create-project'))
      } else {
        $('.header__btns').prepend($('.header__btn_create-project'))
      }
    }
  }
  createBtnChangePos()
})();
// header end
