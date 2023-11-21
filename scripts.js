document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const totalItems = document.querySelectorAll(".carousel-item-own").length;

    function showSlide(index) {
        const carousel = document.querySelector(".carousel-own");
        const itemWidth = document.querySelector(".carousel-item-own").clientWidth;
        const newPosition = -index * itemWidth;

        if (index < 0) {
            currentSlide = totalItems - 1;
        } else if (index >= totalItems) {
            currentSlide = 0;
        } else {
            currentSlide = index
        }

        carousel.style.transform = `translateX(${newPosition}px)`;
    }

    function prevSlide() {
        showSlide(currentSlide - 1)
    }

    function nextSlide() {
        showSlide(currentSlide + 1)
    }
})
