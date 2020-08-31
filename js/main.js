$(function(){
 $('.header__slider').slick({
   prevArrow: null,
   nextArrow: null,
   fade: true,
   autoplay: 3000,
   dots: true
 });

 $('.header-btn').on('click', function(){
  $('.menu').addClass('active');
 });
   
 $('.close-btn').on('click', function(){
  $('.menu').removeClass('active');
 });

});