console.log("=== OBJECT PRACTICE ===");

// sample object
let person = {
  name: "Ani",
  city: "Pune"
};

// typeof object
console.log(typeof person); // object

// access properties
console.log(person.name);
console.log(person.address); // undefined (does not exist)


// 🔄 change property value
person.name = "Rani";
console.log("After change:", person);


// ➕ add new property
person.age = 25;
console.log("After adding age:", person);


// ❌ delete property
delete person.city;
console.log("After delete:", person);



console.log("\n=== UNDEFINED ===");

let myVariable;
console.log(myVariable); // undefined



console.log("\n=== NULL ===");

let myNull = null;
console.log(myNull); // null
console.log(typeof myNull); // object (JS bug)



console.log("\n=== SYMBOL ===");

let mySymbol = Symbol("mySymbol");
console.log(mySymbol);       // Symbol(mySymbol)
console.log(typeof mySymbol); // symbol
