document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm(); // Call validation function
});

function validateForm() {
    // Validate full name
    var fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        alert('Please enter your full name');
        return false;
    }

    // Validate username
    var username = document.getElementById('username').value.trim();
    if (username === '') {
        alert('Please enter your username');
        return false;
    }

    // Validate email
    var email = document.getElementById('email').value.trim();
    if (email === '') {
        alert('Please enter your email');
        return false;
    }

    // Validate phone number
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (phoneNumber === '') {
        alert('Please enter your phone number');
        return false;
    }

    // Validate password
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password === '') {
        alert('Please enter your password');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // Validate gender
    var genderOptions = document.getElementsByName('gender');
    var genderSelected = false;
    for (var i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert('Please select your gender');
        return false;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    document.getElementById('registrationForm').reset(); // Optional: Reset form after submission
}