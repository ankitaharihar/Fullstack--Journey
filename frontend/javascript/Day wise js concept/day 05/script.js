//if condition 
let marks = 40;

if (marks > 35){
    console.log("pass");
}

//if else condition
let marks1 = 30;
if (marks1 > 35){
    console.log("pass");
}else{
    console.log("fail");
}


// give numer is positive or negative 
//positive number 
let num= 5;
if (num > 0){
    console.log("positive");
} else {
    console.log("negative");

}
//negeative number
let num1= -5;
if (num1 > 0){
    console.log("positive");
} else {
    console.log("negative");
}


//even and odd number
let number = 4;
if (number ===0){
    console.log("the number is zero");
} else if (number % 2 === 0){
    console.log("the number is even");
} else {
    console.log("the number is odd");
}


// pass and fail 
let numb =90
if (numb >= 90){
    console.log("lga nhi tha lekin tu toh topper nikla ")
}
else if (numb>=80){
    console.log("shabash bhai ne bohot mehnat ki hei ");
}
else if (numb >= 70){
    console.log("lga nhi tha itna milega tuze ");
}
else if (numb >= 60){
    console.log("aacha mile hei tuze ");
}
else if(numb >= 50){
    console.log(" thoda aur padhai kar le bhai tu");
}
else if (numb>= 40){
    console.log("padhai kar le bhai tu");
}
else{
    console.log("padhai chod de bhai tu ")
}

// fizz buzz
let numbe = 45;

if (numbe % 15 === 0){
    console.log("fizzbuzz");
}if (numbe %3 === 0 ){
    console.log("fizz");
}else if (numbe %5 === 0){
    console.log("buzz");
}
else{
    console.log("numbe");
}


//switch case
let day = 3;    
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");     
        break;
    case 3:
        console.log("Wednesday");           
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");  
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}