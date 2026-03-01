//Create a function that prints the first n numbers in the Fibonacci series.
function fibonacci(n) {
    let a = 0, b = 1, c;
    let result = [];    
    for (let i = 0; i < n; i++) {
        result.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return result;
}
console.log(fibonacci(10));