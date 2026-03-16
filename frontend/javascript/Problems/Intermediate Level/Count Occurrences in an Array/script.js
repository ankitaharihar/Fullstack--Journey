function countOccurrences(arr) {
    const frequency = {};

    for (const item of arr) {
        if (frequency[item]) {
            frequency[item] += 1;
        } else {
            frequency[item] = 1;
        }
    }

    return frequency;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3]));
