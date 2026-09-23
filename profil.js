document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('error-message').textContent = '';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
        return;
    }

    // Simulate a login attempt
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform other actions
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
