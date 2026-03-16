function sumArray(arr) {
    let total = 0;

    for (const num of arr) {
        total += num;
    }

    return total;
}

console.log(sumArray([5, 10, 15]));
