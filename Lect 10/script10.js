// Optimized code for checking prime number or not
let squareRootOf10 = Math.sqrt(100); // used to find the square root of a number
console.log(squareRootOf10);

let num = 9;
let isPrime = true;
let sqrt = Math.sqrt(num);
for(let i=2; i<=Math.floor(sqrt); i++){
  if(num%i == 0){
    isPrime = false;
    break; // no need to check further
  }
}

(isPrime) ? console.log(num,"is Prime") : console.log(num,"is NOT Prime");


// Scopes
a = 10; // global scope -> bad practice

// Types of Scope -> Global Scope, Block Scope, Nested Scope 

{ // Block Scope
  // somthing written here 
}


// HOISTING => The process whereby the interpreter appears to move the declaration of functions, 
// variables or classes to the top of their scope, prior to execution of the code.

// Question:
/* 
Write the pattern using loops

*****
 ****
  ***
   **
    * 
*/
