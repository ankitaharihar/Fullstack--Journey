function secondLargest(arr) {
    const uniqueNumbers = [...new Set(arr)];

    if (uniqueNumbers.length < 2) {
        return null;
    }

    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}

console.log(secondLargest([4, 1, 9, 3, 7]));
