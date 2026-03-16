function convertToUppercase(arr) {
    const output = [];

    for (const item of arr) {
        output.push(item.toUpperCase());
    }

    return output;
}

console.log(convertToUppercase(["apple", "banana", "cherry"]));
