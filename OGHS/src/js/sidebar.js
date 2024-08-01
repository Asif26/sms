document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.sidebar-menu li a');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const menuToggle = document.getElementById('menu-toggle');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden');
        content.classList.toggle('content-hidden-sidebar');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Enable continuous loop mode
        pagination: {
            el: '.swiper-pagination', // Enable pagination
            clickable: true, // Make pagination bullets clickable
        },
        navigation: {
            nextEl: '.swiper-button-next', // Next button selector
            prevEl: '.swiper-button-prev', // Previous button selector
        },
        autoplay: {
            delay: 5000, // Delay between slides in milliseconds (5 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        effect: 'slide', // Slide transition effect (other options: 'fade', 'cube', 'coverflow', 'flip')
        speed: 800, // Transition speed in milliseconds
    });
});
