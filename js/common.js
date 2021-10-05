$(".menu").on("click", function(e){
  $("nav").toggleClass("nav_active");
});

$(".close").on("click", function(e){
  $("nav").removeClass("nav_active");
});

var swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    990: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  navigation: {
    nextEl: ".object .right",
    prevEl: ".object .left",
  },
});