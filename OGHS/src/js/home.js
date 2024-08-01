document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
    let autoSlideInterval;

    function showImage(index) {
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }
        carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showImage(currentIndex + 1);
        }, 5000); // Change image every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevButton.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    carouselImages.addEventListener('mouseover', stopAutoSlide);
    carouselImages.addEventListener('mouseout', startAutoSlide);

    // Initialize carousel
    startAutoSlide();
});
