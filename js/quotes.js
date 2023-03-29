$(document).ready(function(){
    $('.grid-container-grid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendArrows: $('.grid-container-navigation-arrows'),
        appendDots: $('.grid-container-dots'),
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 800,
                settings: "unslick",
            }
        ]
    });
});