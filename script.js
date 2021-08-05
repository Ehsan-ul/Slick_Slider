$(document).ready(function () {
  // slider 1 js
  $('.slider1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    speed: 2000,
    cssEase: 'linear',
    dots: true,
  });

  // slider 2 js
  $('.slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    speed: 2000,
    cssEase: 'linear',
    dots: true,
  });


  // slider 3 js  
  $('.slider3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    dots: false,
  });

});
