// Valid credentials
const VALID_USERNAME = 'omlingo';
const VALID_PASSWORD = 'pupt';

// Redirect URL after successful login
const REDIRECT_URL = 'index.html'; // Change this to your desired URL

// Get form and error message elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    // Validate credentials
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Successful login
        errorMessage.classList.remove('show');
        
        // Optional: Show success message before redirect
        errorMessage.style.background = '#e8f5e9';
        errorMessage.style.color = '#2e7d32';
        errorMessage.style.borderLeftColor = '#2e7d32';
        errorMessage.textContent = 'Login successful! Redirecting...';
        errorMessage.classList.add('show');
        
        // Redirect after a short delay
        setTimeout(function() {
            window.location.href = REDIRECT_URL;
        }, 1000);
    } else {
        // Failed login
        errorMessage.style.background = '#ffebee';
        errorMessage.style.color = '#c62828';
        errorMessage.style.borderLeftColor = '#c62828';
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.classList.add('show');
        
        // Clear password field
        passwordInput.value = '';
        passwordInput.focus();
    }
});

// Clear error message when user starts typing
usernameInput.addEventListener('input', clearError);
passwordInput.addEventListener('input', clearError);

function clearError() {
    if (errorMessage.classList.contains('show')) {
        errorMessage.classList.remove('show');
    }
}