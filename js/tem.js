$('#modal_button').click(function(e) {
  $('.modal').addClass('active');
  e.preventDefault();
});

$('#modal_back').click(function(e) {
  $('.modal').removeClass('active');
  e.preventDefault();
});