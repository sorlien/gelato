$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open').show();
});

$('#overlay li').on('click', function(){
  $('#overlay').hide();
  $('#overlay').toggleClass('open');
  $('#toggle').removeClass("active");
});