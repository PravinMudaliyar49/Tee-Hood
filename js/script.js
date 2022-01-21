// (function () {
//Floating modal:

let homeBtn = document.querySelector(".home-btn");
let aboutBtn = document.querySelector(".about-btn");

let homeModal = document.querySelector(".home");
let aboutModal = document.querySelector(".about");

homeBtn.addEventListener("mouseenter", () => {
    homeModal.style.display = "block";
});

homeBtn.addEventListener("mouseleave", () => {
    homeModal.style.display = "none";
});

aboutBtn.addEventListener("mouseenter", () => {
    aboutModal.style.display = "block";
});

aboutBtn.addEventListener("mouseleave", () => {
    aboutModal.style.display = "none";
});

//Sliding images:

//To scroll the images vertically, search: css element srolling horizontally OR look at bookmarks.

let slideIdx = 0;
// myManualSlide();

function plusSlides(n) {
    slideIdx += n;
    // myManualSlide();
}

// Thumbnail image controls
// function currentSlide(n) {
//     myManualSlide(slideIdx = n);
// }

function myManualSlide() {
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");

    if (slideIdx === slides.length) {
        slideIdx = 0;
    }

    if (slideIdx < 0) {
        slideIdx = slides.length - 1;
    }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    slides[slideIdx].style.display = "block";
    dots[slideIdx].className += " active";
}



var slideIndex = -1;
myAutoSlides();

function myAutoSlides() {
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0 }

    slides[slideIndex].style.display = "block";

    setTimeout(myAutoSlides, 3000); // Change image every 2 seconds
}


// })();