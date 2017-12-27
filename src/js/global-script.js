
$( document ).ready(function() {

  $('.fancybox').fancybox({
      padding: 0,
      openEffect: 'elastic',
      protect: true,
      animationEffect : "zoom",
      helpers:  {
        overlay: {
            css: {
                'background' : 'rgba(0,0,0,0.6)'
            }
        }
      }
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

/*(function () {
  var burger = document.querySelector('#main-nav-toggler');
  var mobMenu = document.querySelector('#mobile-menu');

  burger.addEventListener('click', function (e) {
    mobMenu.classList.remove('hidden');
  });
}());*/
