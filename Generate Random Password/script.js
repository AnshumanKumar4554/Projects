function generatePassword() {
    const length = 8; // Length of the password
    let charset = '';
    let password = '';

    // Check which checkboxes are checked and build the charset accordingly
    if (document.getElementById('includeNumbers').checked) {
        charset += '0123456789';
    }
    if (document.getElementById('includeLowercase').checked) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (document.getElementById('includeUppercase').checked) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (document.getElementById('includeSymbols').checked) {
        charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';
    }

    if (charset === '') {
        alert('Please select at least one checkbox');
        return;
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Display password
    document.getElementById('password').textContent = password;
}
