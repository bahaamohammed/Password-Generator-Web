const passwordBox = document.getElementById("password");

function createPassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    // Character sets
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~[]{}<>-=/`|";

    let characterPool = '';

    // Build the character pool based on user selections
    if (includeUppercase) characterPool += upperCase;
    if (includeLowercase) characterPool += lowerCase;
    if (includeNumbers) characterPool += numbers;
    if (includeSpecial) characterPool += symbols;

    // Check if at least one character type is selected
    if (characterPool.length === 0) {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';

    // Ensure at least one character from each selected type is included
    if (includeUppercase) password += upperCase[Math.floor(Math.random() * upperCase.length)];
    if (includeLowercase) password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if (includeNumbers) password += numbers[Math.floor(Math.random() * numbers.length)];
    if (includeSpecial) password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the rest of the password length with random characters from the pool
    while (password.length < length) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Display the generated password
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    alert('Password copied to clipboard!');
}
