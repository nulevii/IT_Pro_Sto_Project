new Swiper('.gallery-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

new Swiper('.clients__slider', {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

AOS.init();
