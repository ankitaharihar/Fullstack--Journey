function sumOfDigits(num) {
    const digits = Math.abs(num).toString();
    let sum = 0;

    for (const digit of digits) {
        sum += Number(digit);
    }

    return sum;
}

console.log(sumOfDigits(1234));
