document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper__container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
