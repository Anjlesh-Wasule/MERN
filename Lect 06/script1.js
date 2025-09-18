// Conditionals
let num = 4;
if (num % 2 == 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

let age = 19;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

let num1 = 12;
if ((num1 / 2) % 2 == 0) {
  console.log("Half of number is even");
} else {
  console.log("Half of number is odd");
}

let a = "12";
const b = 12;
let d = 12;

if (a == b) {
  console.log("a and b has same value");
}

if (d === b) {
  console.log("d and b has same value and datatype");
}

let score = 40;
if (score >= 80) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else if (score >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let gender = "Male";
if (age >= 18) {
  if (gender == "Male") {
    console.log("Mature boy");
  }

  if (gender == "Female") {
    console.log("Mature girl");
  }
}

// Print the lucky draw winner if the ticket number is 11 or 101 then then person is lucky draw winner
let ticketNo = 11;
if (ticketNo == 11 || ticketNo == 101) {
  console.log("You are lucky draw winner");
} else {
  console.log("Sorry! Try again next time");
}

// if the user is logged in and has subscription then print Premium user giving access to permium content
// otherwise print please upgrage you plan

let isLoggedIn = true;
let hasSubscription = true;
if (isLoggedIn && hasSubscription) {
  console.log("Premium user, giving access to premium content");
} else {
  console.log("Please upgrade your plan");
}

// Check if the number is good or not
let number = 17;
if(number != 17){
  console.log("Number is good");
}else{
  console.log("Number is Bad");
}

// Given a three digit numnber check if it's palindrome or not
let threeDigitNumber = 321;
let firstdigit = Math.floor(threeDigitNumber / 100);
let lastdigit = threeDigitNumber % 10;

if(firstdigit == lastdigit){
  console.log(threeDigitNumber, "is a palindrome");
}else{
  console.log(threeDigitNumber, "is not a palindrome");
}

// Check if the number is decimal or interger;
let myNumber = 12.5;
let conversion = Math.floor(myNumber);
console.log(myNumber);

if(conversion == myNumber){
  console.log(myNumber, "is an integer");
}
else{
  console.log(myNumber, "is a decimal number");
}
console.log(myNumber%1); // 0.5 // gives the decimal part

// Given two numbers, find the greater one using if-else statements
let n1 = 10, n2 = 12;
let value;
if(n1>n2){
  console.log("n1 is greater");
  value = n1;
}else{
  console.log("n2 is greater");
  value = n2;
}
console.log("Greater value is", value);``

const xy = 34 * " "; 
console.log(xy);

const dslr = 4 + "34" * " " / 5;
console.log(dslr);

// **************************************************Homework**************************************************:
// Using ternary operator check if the number is even or odd
// let age = 19;
// console.log(age >= 18 ? "You can vote" : "You cannot vote");

// let num1 = 12;
// console.log((num1 / 2) % 2 == 0 ? "Half of number is even" : "Half of number is odd");

// let a = "12";
// const b = 12;
// a == b ? console.log("a and b has same value") : "Not same values";

// let d = 12;
// d === b ? console.log("d and b has same value and datatype") :  "Not same values";

// let score = 40;
// console.log(
//   score >= 80 ? "Grade A" :
//   score >= 60 ? "Grade B" :
//   score >= 40 ? "Grade C" :
//   "Fail"
// );

// let gender = "Male";
// (age >= 18 && gender === "Male")
//   ? console.log("Mature boy")
//   : (age >= 18 && gender === "Female")
//   ? console.log("Mature girl")
//   : "Invalid Gender";

// let ticketNo = 11;
// console.log((ticketNo == 11 || ticketNo == 101) ? "You are lucky draw winner" : "Sorry! Try again next time");

// let isLoggedIn = true;
// let hasSubscription = true;
// console.log((isLoggedIn && hasSubscription) ? "Premium user, giving access to premium content" : "Please upgrade your plan");

// let number = 17;
// console.log(number != 17 ? "Number is good" : "Number is Bad");

// let myNumber = 12.5;
// let conversion = Math.floor(myNumber);
// console.log(conversion == myNumber ? "Number is an integer" : "Number is a decimal number");

// let n1 = 10, n2 = 12;
// let value = n1 > n2 ? (console.log("n1 is greater"), n1) : (console.log("n2 is greater"), n2);
// console.log("Greater value is", value);