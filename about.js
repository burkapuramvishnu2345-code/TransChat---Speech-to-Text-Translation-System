// script.js

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggle-button');
    const aboutText = document.getElementById('about-text');

    button.addEventListener('click', function() {
        if (aboutText.classList.contains('expanded')) {
            aboutText.classList.remove('expanded');
            button.textContent = 'Show More';
        } else {
            aboutText.classList.add('expanded');
            button.textContent = 'Show Less';
        }
    });
});
