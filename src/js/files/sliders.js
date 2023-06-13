import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

export default function sliders() {
  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      slidesPerView: 2,
      speed: 700,
      simulateTouch: false,
      spaceBetween: 20,
      navigation: {
        nextEl: " .reviews__slider-btn--next",
        prevEl: " .reviews__slider-btn--prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
      }
    });
  }
}
