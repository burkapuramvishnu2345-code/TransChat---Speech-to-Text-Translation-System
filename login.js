document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    
    // Simple validation for demonstration purposes
    if (username === '' || password === '') {
        messageElement.textContent = 'Both fields are required.';
    } else {
        // Normally, you would send this data to a server for validation
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        window.location.href = 'sign.html';
        
        // Here you would redirect or handle the login logic
        // e.g., window.location.href = 'dashboard.html';
    }

});
