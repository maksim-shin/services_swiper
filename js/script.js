
// SWIPER
const swiper = new Swiper('.swiper', {
  loop: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 16,
      allowTouchMove: false,
      centeredSlides: false,
    },
  },
});


// BRANDS GRID
const toggleBtn = document.getElementById('toggleBtn');
const brandsGrid = document.querySelector('.brands__grid');

toggleBtn.addEventListener ('click', () => {
  const expanded = brandsGrid.classList.toggle('full__grid');

  if (expanded) {
    
    toggleBtn.innerHTML = '<img src="../brands_logo/expand.svg" alt="">Скрыть';

  } else {
  
    toggleBtn.innerHTML = '<img src="../brands_logo/expand.svg" alt="">Показать все';
  }
});
