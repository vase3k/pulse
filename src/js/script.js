$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/sliderLeftArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/sliderRightArrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});