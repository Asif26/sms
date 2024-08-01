document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    const countDownDate = new Date("2024-12-31T23:59:59").getTime();

    // Update the countdown every 1 second
    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('.coming-soon-content').innerHTML = "<h1>We’re Live!</h1><p>Our website is now up and running. Thank you for your patience!</p>";
        }
    }, 1000);
});
