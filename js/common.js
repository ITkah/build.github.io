$(".menu").on("click", function(e){
  $("nav").toggleClass("nav_active");
});

$(".close").on("click", function(e){
  $("nav").removeClass("nav_active");
});