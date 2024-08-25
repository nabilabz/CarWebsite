// $ = simbol dari JQuery

$(document).ready(function () {
    var $slider = $('.carousel');
    var $sliderContainer = $('.carousel-image-container');
    var $slides = $('.product');
    var slideCount = $slides.length;
    var currentSlide = 0;

    $slides.each(function () {
        $(this).css({
            width: $slider.width()
        });
    });
    
    $sliderContainer.css({
        width: $slider.width()
    });

    $('.swipe-prev').on('click', function () {
 
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slideCount - 1;
        }
        updateSliderPosition();
    });

    $('.swipe-next').on('click', function () {
 
        if (currentSlide < slideCount - 5) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSliderPosition();
    });

    function updateSliderPosition() {
        var newLeft = -(currentSlide % slideCount) * $slider.width();
        if (currentSlide === slideCount -1) {
            newLeft = 0;
        }
        $sliderContainer.css('transform', 'translateX(' + newLeft + 'px)');
    }

});