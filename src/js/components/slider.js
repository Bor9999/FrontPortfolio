import Swiper, {Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper(`.swiper`, {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 1,
  speed:500,
  grabCursor:true,
  breakpoints:{
    320: {
      slidesPerView: 2,
      spaceBetween: 1
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 1
    }
  }
});
