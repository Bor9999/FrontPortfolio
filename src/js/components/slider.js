import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);
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
    768: {
      slidesPerView: 3,
      spaceBetween: 1
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
