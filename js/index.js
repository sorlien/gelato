// Hamburger menu

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open').show();
});

$('#overlay li').on('click', function(){
  $('#overlay').hide();
  $('#overlay').toggleClass('open');
  $('#toggle').removeClass("active");
});

// Arrow scroll up
// var viewportHeight = $(window).height(); // == 100vh
//  (function($) {
//       $(document).ready(function(){
//           $(window).scroll(function(){
//               if ($(this).scrollTop() > viewportHeight) {
//                   $('#navbar').fadeIn(200);
//               } else {
//                   $('#navbar').fadeOut(200);
//               }
//           });
//       });
//   })(jQuery);

AOS.init({
  once: true
})