// string reversal
function doReverse(str){
     let sum = '';

    for(let a = str.length-1; a>=0; a--){
       
        sum = sum + str[a];
    }
    return sum;
}
console.log(doReverse("Ankita"));