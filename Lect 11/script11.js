// FUNCTIONS => a block of code designed to perform a specific task.

/* function greetUser(name){
  console.log("Hello User");
}

function greetSpecificUser(name){
  console.log("Hello", name);
}

greetUser(); // function call or function invocation
console.log("Bye User");
greetSpecificUser("Anjlesh"); 
greetSpecificUser("Deep"); 

// Write a single function to print these lines 
function welcome(name, place){
  console.log("Hello " + name + ", Welcome to our " + place);
}

welcome("Riya", "App");
welcome("Pratik", "Website");
welcome("Deep", "Office");

welcome("ADVAIT", "Home");


// Question: Write a function to find the greatest of 2 numbers
function findGreater(a, b){
  // let greater =  (a > b) ? a : b;
  // return greater;
  return (a > b) ? a : b;
}
let ans = findGreater(10, 20);
console.log("Greater is:", ans);

// Homework: Write a function to find minimum of 2 numbers
function findMinimum(a, b){
  return (a < b) ? a : b;
}
console.log("Minimum is:", findMinimum(10, 20)); */


// function sum2(a=100, b=100){ // default parameters
//   return a + b;
// }

// console.log(sum2());




// Write a function to calculate the sum of 2 and 3 numbers
function sum(a=0, b=0, c=0){
  return a + b + c;
}

console.log("Sum of 2 numbers is:", sum(2, 10));
console.log("Sum of 3 numbers is:", sum(1, 2, 10));

// Nested Functions
// Function to calculate fine while submitting the book in library
function library(issuedDate=0){
  // if book issued for 10 days, no fine
  // else fine is 3rs per day after 10 days = [(number of days) - 10] * 3

  const dayOfIssuance = calculateDays(issuedDate);
  
  return (dayOfIssuance > 10) ? (dayOfIssuance - 10) * 3 : 0;
}

function calculateDays(date){
  // logic to calculate number of days
  return 25 - date;
}

console.log(library(2));
console.log(library(12)); 
console.log(library(22)); 


// How is operator handling different number of arguments?
// sum(2, 10)         ||  sum(2, 10, 5) || sum(2, 10, 5, 7, 8, 9, 10)

// Answer is => REST Operator
//  -> Combines multiple elements into a single array
//  -> always the last parameter of the function

function SumN(a, b, ...c){ // args is an array of all the extra arguments passed
  console.log(a, b, c);
}

SumN(2, 10, 2,23,42,54,5);         // a=2, b=10, c=[]


console.log(13/2);