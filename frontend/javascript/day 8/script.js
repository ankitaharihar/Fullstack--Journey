// function greet(name){
//     console.log(name + " is a good girl");
// }
// greet("Rani");
// greet("Vedantika");


//calculate two values
// function add(a,b){
//     let sum = a + b;
//     console.log("sum is " + sum);
// }   
// add(45,65);


// function add(a,b){
//     let sum = a + b;
//     return sum;
// }   
// let result = add(45,90);
// console.log("sum is " + result);


// function checkEvenOrOdd(num){
//     if(num%2==0){
//        return true;
//     }else{
//        return false;
//     }
// }

// console.log(checkEvenOrOdd(34));


//write a function which will accept a number parameter(num)
// and the function will return sum of number 1 to give number


// function addNums(num){
//     let sum = 0
//     sum = num + 1
//     return sum;
// }

// console.log(addNums(4));
// let i = 45
// let sum = 0
// for(let num = 1;num<=i; num++){
//     sum = sum + num; 
  
// }
// console.log(sum); 
 
function doFactorial(num){
    let factorial = 1;
    for(let i =1; i<=num;i++){
    
    factorial = factorial * i;
    
    }
    return factorial;
}
console.log(doFactorial(4));