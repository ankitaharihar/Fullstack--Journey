function countVowels(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const ch of text) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("JavaScript"));
