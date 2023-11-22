$('.restaurant-details-slider').slick({
  prevArrow:
    '<button type="button" class="restaurant-details-slick-prev">&xlarr;</button>',
  nextArrow:
    '<button type="button" class="restaurant-details-slick-next">&xrarr;</button>',

  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 5,
  variableWidth: true,
  touchThreshold: 20,
  waitForAnimate: false,

  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 2,
        variableWidth: true,
      },
    },
  ],
});

$('.room-page-hero-slider').slick({
  prevArrow:
    '<button type="button" class="room-page-slick-prev">&xlarr;</button>',
  nextArrow:
    '<button type="button" class="room-page-slick-next">&xrarr;</button>',

  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true,
  touchThreshold: 20,
});

$('.restaurant-page-hero-slider').slick({
  prevArrow:
    '<button type="button" class="restaurant-page-slick-prev">&xlarr;</button>',
  nextArrow:
    '<button type="button" class="restaurant-page-slick-next">&xrarr;</button>',
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true,
  touchThreshold: 20,
});

$('.hotel-page-hero-slider').slick({
  prevArrow:
    '<button type="button" class="hotel-page-slick-prev">&xlarr;</button>',
  nextArrow:
    '<button type="button" class="hotel-page-slick-next">&xrarr;</button>',

  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true,
  touchThreshold: 20,
});

$('.full-menu').slick({
  prevArrow:
    '<button type="button" class="full-menu-slick-prev">&xlarr;</button>',
  nextArrow:
    '<button type="button" class="full-menu-slick-next">&xrarr;</button>',

  infinite: false,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: false,
  slidesToShow: 1,
  touchThreshold: 20,
  variableWidth: false,
  mobileFirst: true,

  responsive: [
    {
      breakpoint: 1439,
      settings: 'unslick',
    },
  ],
});
