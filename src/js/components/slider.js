import Swiper, {Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper(`.swiper`, {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  speed:500,
  grabCursor:true
});
