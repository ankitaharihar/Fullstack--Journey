function mergeArrays(arr1, arr2) {
    const merged = [];

    for (const num of arr1) {
        merged.push(num);
    }

    for (const num of arr2) {
        merged.push(num);
    }

    return merged;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
