function isValidPassword(password) {
    const minLength = password.length >= 6;
    const hasDigit = /\d/.test(password);

    return minLength && hasDigit;
}

console.log(isValidPassword("Pass123"));
