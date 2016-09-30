$("#owl-clients").owlCarousel({
  items : 4,
  slideSpeed : 300,
  paginationSpeed : 400,
  autoPlay: 5000
});

$('body').scrollspy({ target: '#navbar-example' })



$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});
