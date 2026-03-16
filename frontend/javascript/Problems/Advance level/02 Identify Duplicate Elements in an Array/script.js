function findDuplicates(arr) {
    const seen = new Set();
    const added = new Set();
    const duplicates = [];

    for (const item of arr) {
        if (seen.has(item) && !added.has(item)) {
            duplicates.push(item);
            added.add(item);
        }

        seen.add(item);
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1]));
