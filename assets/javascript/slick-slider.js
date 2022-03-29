

$(document).ready(function(){
    $('.slider-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        infinite: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left slick-arrow' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right slick-arrow' aria-hidden='true'></i></button>"
    });
});