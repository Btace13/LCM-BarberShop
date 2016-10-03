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

$(function() {
    // Generic selector to be used anywhere
    $(".js-scroll-to-id").click(function(e) {

        // Get the href dynamically
        var destination = $(this).attr('href');

        // Prevent href=“#” link from changing the URL hash (optional)
        e.preventDefault();

        // Animate scroll to destination
        $('html, body').animate({
            scrollTop: $(destination).offset().top
        }, 1000);
    });
});


// $(document).on('click', 'a', function(event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
// });
