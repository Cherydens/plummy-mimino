$('.restaurant-details-slider').slick({
  // dots: true,
  prevArrow: '<button type="button" class="restaurant-details-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="restaurant-details-slick-next">&xrarr;</button>',
  
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 5,
  variableWidth: true, 

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
  // dots: true,


  prevArrow: '<button type="button" class="room-page-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="room-page-slick-next">&xrarr;</button>',

  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true,
});

$('.restaurant-page-hero-slider').slick({
  // dots: true,

  prevArrow: '<button type="button" class="restaurant-page-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="restaurant-page-slick-next">&xrarr;</button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true, 
});

$('.hotel-page-hero-slider').slick({
  // dots: true,
  prevArrow: '<button type="button" class="hotel-page-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="hotel-page-slick-next">&xrarr;</button>',

  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true,
});

$('.full-menu').slick({
  // dots: true,
  prevArrow:
    '<img class="full-menu-slick-prev" src="../img/icons/menu-angle-left.svg" alt="">',
  nextArrow:
    '<img class="full-menu-slick-next" src="../img/icons/menu-angle-right.svg" alt="">',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: false,
  slidesToShow: 1,
  variableWidth: false, // обовязково додається, щоб частина картки заходило за вьюпорт

  responsive: [
    {
      breakpoint: 1440,
      settings: 'unslick',
    },
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// http://kenwheeler.github.io/slick/

// 1. Створити у папці js окремий файл, наприклад, "slick.js" і вставити в нього код, що на 1-9 рядках цього файлу

// 2. Підключити його до index.js

// 3. Підключити у head наступні лінки
//    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
//    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

// 4. Підключити перед закриваючим тегом </body> наступні лінки
//    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
//    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
//    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

// 5. Задати клас "responsive" на батьківський елемент (div) та огорнути необхідні елементи/картки у теги <div></div>.

//Після цього, при кликі на пагінацію чи перетягування мишкою, картки будуть гортатися
