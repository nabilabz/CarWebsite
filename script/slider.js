// $ = simbol dari JQuery
$(document).ready(function () {
    // Kalau document (HTML) itu udah ready. Lakuin functionnya

    console.log("JQuery is ready for slider");

    var $slider = $('.carousel')
    var $sliderContainer = $('.carousel-image-container')
    var $slides = $('.carousel-image')

    // Variable Pendukung
    var slideWidth = $slides.width()
    var slideHeight = $slides.height()
    var slideCount = $slides.length
    var totalWidth = slideCount * slideWidth

    // Bikin frame

    $slider.css({
        width: slideWidth,
        height: slideHeight
    });

    // Container untuk sliding
    $sliderContainer.css({
        width: totalWidth,
        marginLeft: -slideWidth,
        transition: "margin 0.5s ease-in-out"
    });

    // Initial Position
    var currIndex = 0

    // Function untuk gerakin
    function moveSlider() {
        currIndex++

        if(currIndex >= slideCount) {
            currIndex = 0;
        }

        // Hitung posisi baru jendela kita
        var newMarginLeft = currIndex * -slideWidth

        // Modify css container kita
        $sliderContainer.css({
            marginLeft:newMarginLeft
        })
    }

    // Apply using interval
    setInterval(() => {
        moveSlider()
    }, 2000);
});