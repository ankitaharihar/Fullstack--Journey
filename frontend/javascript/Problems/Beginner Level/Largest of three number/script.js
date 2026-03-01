let num1 = 4;
let num2 = 8;
let num3 = 8.5;

if(num1>=num2 && num1>=num3 ){
    console.log(num1  +  "is largest number")
}else if (num2>=num3){
    console.log(num2  +  "is largest number")
} else{
    console.log(num3  +  "is largest number")
}



//Write a function that accepts three numbers and returns the largest one.
function largestOfThree(num1,num2,num3){
    if(num1>=num2 && num1>=num3 ){
        return num1  +  "is largest number";
    }else if (num2>=num3){
        return num2  +  "is largest number";
    } else{
        return num3  +  "is largest number";
    }
}

console.log(largestOfThree(55,20,30));