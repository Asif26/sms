// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Function to handle card clicks
    function handleCardClick(event) {
        const card = event.currentTarget;
        const cardTitle = card.querySelector('h2').textContent;
        let url = '';

        switch (cardTitle) {
            case 'Teacher':
                url = '/src/Html/emplist.html'; // Redirect to teacher details page
                break;
            case 'Result':
                url = '/src/Html/soon.html'; // Redirect to result page
                break;
            case 'Attendance':
                url = '/src/Html/check-att.html'; // Redirect to attendance page
                break;
            case 'Exam':
                url = '/src/Html/soon.html'; // Redirect to exam page
                break;
            default:
                console.error('Unknown card title');
                return;
        }

        // Redirect to the corresponding page
        window.location.href = url;
    }

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
});
