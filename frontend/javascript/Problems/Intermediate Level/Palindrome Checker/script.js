function isPalindrome(text) {
    const normalized = text.toLowerCase();
    const reversed = normalized.split("").reverse().join("");

    return normalized === reversed;
}

console.log(isPalindrome("radar"));
