console.log("Hello, World");

// Wrong way to declare variables
person1 = "Harsh";
person1Age = 20;

person2 = "Ravi";
person1Age = 22;

console.log(person1);
console.log("Sum of ages of both persons is: ", person1Age + person2Age);

// Correct way to declare variables
var person1 = "Harsh";
var person1Age = 20;
var person2 = "Ravi";
var person2Age = 22;
console.log(person1);

let a=10, b = 20;

//sum
let c = a + b;
console.log("sum of a and b:", c);

//subtract
c = b - a;
console.log("ba = " + c);

//multiplication
c = a * b;
console.log("a * b = " + c);

//division
c = b / a;
console.log("b/a = " + c);

//remainder -> %
c = a % b;
console.log("a%b = " + c);

//power -> **
c = 2 ** 4;
console.log("2 raised to power 4: " + c);

// Q1: Convert minutes to seconds
const minutes = 24;
const seconds = minutes * 60;
console.log("Minutes to second convesion: " + seconds);

// Q2: Find the last digit of a number
const number = 123;
const lastDigit = number % 10;
console.log("Last digit of number is: " + lastDigit);

// Q3:Find the second last digit of a number
const num1 = 123;
const secondLastDigit = Math.floor((num1 % 100) / 10);
console.log("Second last digit of number is: " + secondLastDigit);

// Q4: Find 3rd last digit of a number
const num2 = 523;
const thirdLastDigit = Math.floor((num2 % 1000) / 100);
console.log("Third last digit of number is: " + thirdLastDigit);

let n1 = "123";
let str = "abc";

console.log("n1 + str =", n1 + str);   // "123abc" (string concatenation)
console.log("n1 - str =", n1 - str);   // NaN
console.log("n1 * str =", n1 * str);   // NaN
console.log("n1 / str =", n1 / str);   // NaN
console.log("n1 % str =", n1 % str);   // NaN

console.log("str - n1 =", str - n1);   // NaN
console.log("str * n1 =", str * n1);   // NaN
console.log("str / n1 =", str / n1);   // NaN
console.log("str % n1 =", str % n1);   // NaN

let result = -31 % 7;
console.log("Result of -31 % 7 is: " + result);


// console.log(c23);  // ReferenceError: Cannot access 'c23' before initialization
// let c23 = 45;

console.log(d23);  // undefined
var d23 = 56; 