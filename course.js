document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const courseName = this.getAttribute('data-course');
        const messageElement = document.getElementById('message');
        
        // Simulate an enrollment process
        messageElement.textContent = `You have enrolled in ${courseName}!`;

        // Redirect to different pages based on the course name
        setTimeout(() => {
            if (courseName === 'hari') {
                window.location.href = 'hari.html';
            } else if (courseName === 'naresh') {
                window.location.href = 'naresh.html';
            } else {
                // Default action or redirect to a fallback page
                window.location.href = 'default.html';
            }
        }, 2000); // Delay in milliseconds (2000ms = 2 seconds)
    });
});
