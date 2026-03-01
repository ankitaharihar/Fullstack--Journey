// Without function 
let num = 8;

if(num%2 === 0){
    console.log("This is even");
}else{
    console.log("This is odd");
}



//create a function that check if given number is even or odd
function checkEvenOdd(num){
    if(num%2 === 0){
        return "This is even";
    }else{
        return "This is odd";
    }
}

console.log(checkEvenOdd(10));