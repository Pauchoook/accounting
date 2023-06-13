import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

export default function sliders() {
  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      speed: 700,
      simulateTouch: false,
      spaceBetween: 20,
      navigation: {
        nextEl: " .reviews__slider-next",
        prevEl: " .reviews__slider-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }

  const casesSlider = document.querySelector(".cases__slider");

  if (casesSlider) {
    const swiper = new Swiper(casesSlider, {
      slidesPerView: 1,
      speed: 700,
      simulateTouch: false,
      spaceBetween: 20,
      navigation: {
        nextEl: " .cases__slider-next",
        prevEl: " .cases__slider-prev",
      },
      breakpoints: {
        577: {
          slidesPerView: 2,
        },
      },
    });
  }

  const responsbilitySlider = document.querySelector(".personal-responsibility__slider");

  if (responsbilitySlider) {
    const swiper = new Swiper(responsbilitySlider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      speed: 700,
      simulateTouch: false,
      navigation: {
        nextEl: " .personal-responsibility__slider-next",
        prevEl: " .personal-responsibility__slider-prev",
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
    });
  }

  const newsSlider = document.querySelector(".news__slider");

  if (newsSlider) {
    const swiper = new Swiper(newsSlider, {
      slidesPerView: 1,
      speed: 700,
      simulateTouch: false,
      spaceBetween: 20,
      navigation: {
        nextEl: " .news__slider-next",
        prevEl: " .news__slider-prev",
      },
      breakpoints: {
        577: {
          slidesPerView: 2,
        },
      },
    });
  }
}
