function filterEvenNumbers(arr) {
    const evenNumbers = [];

    for (const num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
