document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hardcoded credentials (admin login)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        // Set login flag in localStorage
        localStorage.setItem('loggedIn', 'true');
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials! Please try again.');
    }
});
