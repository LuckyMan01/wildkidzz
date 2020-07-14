$(function(){
    $('.basket__info-button').click(function(){
        $('.basket__info-list').toggleClass('activ');
    });
    $('.basket__info-button-one').click(function(){
        $('.basket__info-list-one').toggleClass('activ');
    });
    $('.box__menu').on('click', function () {
        $('.menu__list').slideToggle();
      });
});