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


        // itemsCustom: [
        //     [0, 2],
        //     [450, 4],
        //     [600, 7],
        //     [700, 9],
        //     [1000, 10],
        //     [1200, 12],
        //     [1400, 13],
        //     [1600, 15]
        // ],
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
