function sumNestedArray(arr) {
    let total = 0;

    for (const item of arr) {
        if (Array.isArray(item)) {
            total += sumNestedArray(item);
        } else if (typeof item === "number") {
            total += item;
        }
    }

    return total;
}

console.log(sumNestedArray([[1, 2], [3, 4], [5]]));
