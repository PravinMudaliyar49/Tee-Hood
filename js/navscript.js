(function () {
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

})();