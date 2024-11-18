const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
