document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    let slideTimeout;

    function showSlides(n) {
        clearTimeout(slideTimeout); // Clear the previous timeout

        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";

        slideTimeout = setTimeout(function() { showSlides(slideIndex += 1); }, 3000); 
    }

    // Assign plusSlides and currentSlide to window to make them accessible globally
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    showSlides(slideIndex); // Initial call with slideIndex
});
