// filepath: /c:/Users/HUH/Desktop/Project/poop/my-website-project/src/js/login.js
function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    // Simulate a login process
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'main.html'; // Redirect to main page
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
}

document.getElementById('login-form').addEventListener('submit', validateForm);