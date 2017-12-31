$(document).ready(function () {
    $(".carousel").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });

});

$('.more-info').click(function () {
    $("#card1").toggleClass('flip');
});