// script.js
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;

        // Toggle display of the answer
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
    });
});
