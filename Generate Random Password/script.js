// function generatePassword() {
//     const length = 8; // Length of the password
//     let charset = '';
//     let password = '';

//     // Check which checkboxes are checked and build the charset accordingly
//     if (document.getElementById('includeNumbers').checked) {
//         charset += '0123456789';
//     }
//     if (document.getElementById('includeLowercase').checked) {
//         charset += 'abcdefghijklmnopqrstuvwxyz';
//     }
//     if (document.getElementById('includeUppercase').checked) {
//         charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     }
//     if (document.getElementById('includeSymbols').checked) {
//         charset += '!@#$%^&*()-_=+[]{}|;:,.<>?';
//     }

//     if (charset === '') {
//         alert('Please select at least one checkbox');
//         return;
//     }

//     // Generate password
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset[randomIndex];
//     }

//     // Display password
//     document.getElementById('password').textContent = password;
// }



document.addEventListener('DOMContentLoaded', function () {
    const charset = {
        default: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    function generateRandomPassword(length = 8, includeNumbers = false, includeSymbols = false) {
        let charsetToUse = charset.default;
        if (includeNumbers) {
            charsetToUse += charset.numbers;
        }
        if (includeSymbols) {
            charsetToUse += charset.symbols;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charsetToUse.length);
            password += charsetToUse[randomIndex];
        }
        return password;
    }

    function updatePassword() {
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const randomPassword = generateRandomPassword(8, includeNumbers, includeSymbols);
        const passwordField = document.getElementById('password');
        passwordField.value = randomPassword;
    }

    // Set initial password
    updatePassword();

    // Add event listeners to checkboxes
    document.getElementById('includeNumbers').addEventListener('change', updatePassword);
    document.getElementById('includeSymbols').addEventListener('change', updatePassword);
});
