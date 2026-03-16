function countWords(text) {
    const cleaned = text.trim();

    if (cleaned === "") {
        return 0;
    }

    return cleaned.split(/\s+/).length;
}

console.log(countWords("Hello world, this is JavaScript"));
