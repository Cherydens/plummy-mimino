$('.room-page-hero-slider').slick({
  // dots: true,
  prevArrow: '<img class="room-page-slick-prev" src="../img/icons/angle-left.svg" alt="">',
  nextArrow: '<img class="room-page-slick-next" src="../img/icons/angle-right.svg" alt="">',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true, // обовязково додається, щоб частина картки заходило за вьюпорт

  // responsive: [
  //   {
  //     breakpoint: 1440,
  //     settings: {
  //       slidesToShow: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2,
  //     },
  //   },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  // ],
});

$('.restaurant-page-hero-slider').slick({
  // dots: true,
  prevArrow: '<img class="restaurant-page-slick-prev" src="../img/icons/angle-left.svg" alt="">',
  nextArrow: '<img class="restaurant-page-slick-next" src="../img/icons/angle-right.svg" alt="">',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,
  variableWidth: true, // обовязково додається, щоб частина картки заходило за вьюпорт

  // responsive: [
  //   {
  //     breakpoint: 1440,
  //     settings: {
  //       slidesToShow: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2,
  //     },
  //   },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  // ],
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
