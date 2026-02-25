let num1 = 5;
let num2 = 5;
let op = "-"
let result;

if (op === "+"){
    result = num1 + num2;
}else if (op === "-"){
    result = num1 - num2;
}else if (op === "*"){
    result = num1 * num2;
}else {
  console.log("Invalid op");
}

if(result !== undefined ){
    console.log(result);
}






// Function 
function cal(a,b,op){
    let result;
    if (op === "+") {
    result = a + b;
}
else if (op === "-") {
  result = a - b;
}
else if (op === "*") {
  result = a * b;
}
else if (op === "/") {
  result = a / b;
}
else {
  console.log("invalid")
}
return result;
}

console.log(cal(3,4,"+"));




console.log(cal(5,8,"*"));



for(let i = 0; i < 10 ;  i++){
    console.log(cal(5,9,"*"));
}