document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('tel').value;
        const email = document.getElementById('email').value;

        const phonePattern = /^\d{3}-\d{7,8}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valid = true;
        let errorMessage = '';

        if (!name) {
            valid = false;
            errorMessage += 'Name is required.\n';
        }

        if (!phonePattern.test(phone)) {
            valid = false;
            errorMessage += 'Phone number is invalid. It should be in the format 012-3456789.\n';
        }

        if (!emailPattern.test(email)) {
            valid = false;
            errorMessage += 'Email is invalid.\n';
        }

        if (!valid) {
            event.preventDefault();
            alert(errorMessage);
        } else {
            event.preventDefault();
            alert('Thank you! Your information have been received!');
            // Reset the form 
            document.getElementById('contactForm').reset();
        }
    });
});