// Если на проекте jQuery
$(document).ready(function () {
  // code
  $(".reviews__carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    center: true,
  });
  $(".certificate__carousel").owlCarousel({
    items: 4,
    nav: true,
    margin: 18,
    loop: true,
    center: false,
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
