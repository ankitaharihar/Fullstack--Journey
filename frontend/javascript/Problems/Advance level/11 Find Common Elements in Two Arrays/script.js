function findCommonElements(arr1, arr2) {
    const common = [];

    for (const item of arr1) {
        if (arr2.includes(item) && !common.includes(item)) {
            common.push(item);
        }
    }

    return common;
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));
