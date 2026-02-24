// Checks for prime numbers from 1 to 50 
for (let num = 2; num <= 50; num++) {

  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num + " is prime");
  } else {
    console.log(num + " is not prime");
  }
}


//for (let num = 1; num <= 50; num++) {

//  if (num <= 1) {
 //   console.log(num + " is not prime");
//    continue;
//  } }
