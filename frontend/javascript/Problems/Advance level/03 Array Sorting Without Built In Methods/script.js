function bubbleSortAscending(arr) {
    const sorted = arr.slice();

    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                const temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }

    return sorted;
}

console.log(bubbleSortAscending([5, 3, 8, 1, 2]));
