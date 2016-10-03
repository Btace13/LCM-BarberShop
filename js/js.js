$("#owl-clients").owlCarousel({
    items: 4,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: 5000
});


$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({

        items: 3,

        navigation: true

    });

});


// $(document).on('click', 'a', function(event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
// });
