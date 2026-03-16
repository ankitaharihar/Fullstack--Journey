// 1. Using map
const numbersForSquare = [2, 3, 4, 5];
const squaredNumbers = numbersForSquare.map((num) => num * num);
console.log("Map 1 - Squared numbers:", squaredNumbers);

const wordsForUppercase = ["hello", "world", "javascript"];
const uppercaseWords = wordsForUppercase.map((word) => word.toUpperCase());
console.log("Map 2 - Uppercase words:", uppercaseWords);

const items = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 5 },
  { price: 8, quantity: 3 },
];
const totalPrices = items.map((item) => item.price * item.quantity);
console.log("Map 3 - Total prices:", totalPrices);

// 2. Using filter
const numbersForEven = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbersForEven.filter((num) => num % 2 === 0);
console.log("Filter 1 - Even numbers:", evenNumbers);

const wordsByLength = ["apple", "bat", "banana", "cat", "grape"];
const wordsWithLengthAtLeastFive = wordsByLength.filter((word) => word.length >= 5);
console.log("Filter 2 - Words with length >= 5:", wordsWithLengthAtLeastFive);

const students = [
  { name: "John", marks: 35 },
  { name: "Alice", marks: 50 },
  { name: "Bob", marks: 40 },
  { name: "Emma", marks: 30 },
];
const passedStudents = students.filter((student) => student.marks >= 40);
console.log("Filter 3 - Passed students:", passedStudents);

// 3. Using forEach
const numbersForDouble = [1, 2, 3, 4, 5];
console.log("forEach 1 - Number multiplied by 2:");
numbersForDouble.forEach((num) => {
  console.log(num * 2);
});

const wordsWithLength = ["JavaScript", "React", "Node", "MongoDB"];
console.log("forEach 2 - Word and its length:");
wordsWithLength.forEach((word) => {
  console.log(`${word} - Length: ${word.length}`);
});

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 20000 },
];
console.log("forEach 3 - Product and price format:");
products.forEach((product) => {
  console.log(`Product: ${product.name}, Price: ${product.price}`);
});
