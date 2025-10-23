document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("backBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction(button);
    };

    function scrollFunction(button) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    button.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    //Login form
    const loginBtn = document.getElementById('loginBtn');
    const dropdownLoginBtn = document.getElementById('dropdownLoginBtn');
    const loginForm = document.getElementById('loginForm');
    const usernameDisplay = document.getElementById("usernameDisplay");
    const usernameDropdown = document.getElementById("usernameDropdown");
    const dropdownUsernameDisplay = document.getElementById("dropdownUsernameDisplay");
    const dropdownUsernameDropdown = document.getElementById("dropdownUsernameDropdown");
    const logoutBtn = document.getElementById("logoutBtn");
    const dropdownLogoutBtn = document.getElementById("dropdownLogoutBtn");

    loginForm.style.display = 'none'; // Ensure form is hidden initially

    loginBtn.addEventListener('click', function() {
        loginForm.style.display = 'block';
    });

    dropdownLoginBtn.addEventListener('click', function() {
        loginForm.style.display = 'block';
    });

    window.onclick = function(event) {
        if (event.target == loginForm || event.target == signupForm) {
            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
        } else if (!usernameDisplay.contains(event.target) && !usernameDropdown.contains(event.target)) {
            usernameDropdown.style.display = 'none';
        }else if (!dropdownUsernameDisplay.contains(event.target) && !dropdownUsernameDropdown.contains(event.target)) {
            dropdownUsernameDropdown.style.display = 'none';
        }
    };

    // Mock function to simulate login (replace with actual login logic)
    function login(username, password) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('username', username);
            return true;
        }
        return false;
    }

    // Function to sign up (store user credentials)
    function signup(username, password) {
        const user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    }

    // Check if a user is already logged in on page load
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        showUsername(storedUsername);
    }

    // Show username function
    function showUsername(username) {
        usernameDisplay.textContent = `Welcome, ${username}`;
        usernameDisplay.style.display = 'inline';
        loginBtn.style.display = 'none';

        dropdownUsernameDisplay.textContent = `Welcome, ${username}`;
        dropdownUsernameDisplay.style.display = 'inline';
        dropdownLoginBtn.style.display = 'none';

        usernameDisplay.addEventListener('click', function() {
            usernameDropdown.style.display = usernameDropdown.style.display === 'block' ? 'none' : 'block';
        });

        dropdownUsernameDisplay.addEventListener('click', function() {
            dropdownUsernameDropdown.style.display = dropdownUsernameDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Add event listener for login form submission
    document.getElementById('loginFormContent').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        const username = loginForm.querySelector("input[name='uname']").value;
        const password = loginForm.querySelector("input[name='psw']").value;

        // Attempt to login (replace with actual login logic)
        if (login(username, password)) {
            showUsername(username);
            loginForm.style.display = 'none';
        } else {
            // Handle login failure 
            alert('Login failed. Please try again.');
        }
    });

    // Add event listener for sign-up form submission
    document.getElementById('signupFormContent').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        const username = signupForm.querySelector("input[name='uname']").value;
        const password = signupForm.querySelector("input[name='psw']").value;

        // Attempt to sign up
        if (signup(username, password)) {
            alert('Sign up successful! Please log in.');
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            // Handle sign-up failure 
            alert('Sign up failed. Please try again.');
        }
    });

    // Logout function
    function logout() {
        localStorage.removeItem('username');
        usernameDisplay.style.display = 'none';
        loginBtn.style.display = 'inline';

        dropdownUsernameDisplay.style.display = 'none';
        dropdownLoginBtn.style.display = 'inline';
    }

    logoutBtn.addEventListener('click', function() {
        logout();
        logoutBtn.style.display = 'none';
        usernameDropdown.style.display = 'none';
    });

    dropdownLogoutBtn.addEventListener('click', function() {
        logout();
        dropdownLogoutBtn.style.display = 'none';

    });
});


