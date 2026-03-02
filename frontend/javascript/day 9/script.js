// let cities = ["Pune","Nashik","Banglore","Hyderabad","Chennai","Delhi","Kolkata"];

// console.log(cities.length);


// console.log(cities.at(-1));


//push adds element to the end of array
// cities.push("Mumbai");
// console.log(cities);


//pop removes element from the end of array
// cities.pop();
// console.log(cities);


//shift removes element from the beginning of array
// cities.shift();
// console.log(cities);

//unshift adds element to the beginning of array
// cities.unshift("Mumbai");
// console.log(cities);


//splice (index, count, element to add)
// cities.splice(3,3,"Delhi");
// console.log(cities);

// reverse - reverses the order of elements in the array
// cities.reverse();
// console.log(cities);


//isArray - checks if an object is an array
// let cities1 = "Pune";
// console.log(Array.isArray(cities1)); // false


// let cities = {};
// console.log(Array.isArray(cities)); // false

// let cities2 = ["Pune","Nashik","Banglore","Hyderabad","Chennai","Delhi","Kolkata"];
// console.log(Array.isArray(cities2)); // true



// given add of number calculate sum of all number 
// let num= [1,5,2,7];
// let sum = 0;
// for (let i=0;i<num.length;i++){
//     sum = sum +num[i];
    
// }
// console.log(sum);




// function sumOfAarray(num){

//     let sum = 0;
//     for (let i=0;i<num.length;i++){
//     sum = sum +num[i];
    
// }
// return sum;
// }


///used max for finding largest num

//larger number in array
// let num = [1,5,6,22,88,5,3];
// let max = num[0];
// for (let i=0;i<num.length;i++){
//     if(num[i]>max){
//         max = num[i];
//     }
// }
// console.log(max);



/// used min for finding smallest num
// let num = [1,5,6,22,88,5,3];
// let min = num[0];
// for (let i=0;i>num.length;i++){
//    if(num[i]>min){
//        min = num[i];
//     }
//  }
//  console.log(min);



 ///second largest number in array
// let arr = [3, 6, 7, 9, 8, 5];

// // Step 1: edge case
// if (arr.length < 2) {
//   console.log("No second largest");
// }

// // Step 2: start with very small values
// let largest = -Infinity;
// let secondLargest = -Infinity;

// // Step 3: loop
// for (let i = 0; i < arr.length; i++) {
//   let current = arr[i];

//   // Step 4: new largest mila?
//   if (current > largest) {
//     secondLargest = largest; // purana largest neeche aaya
//     largest = current;
//   }

//   // Step 5: beech wala case
//   else if (current < largest && current > secondLargest) {
//     secondLargest = current;
//   }
// }

// console.log(secondLargest);





