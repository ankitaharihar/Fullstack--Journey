function filterUniqueElements(arr) {
    const unique = [];

    for (const item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }

    return unique;
}

console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5]));
