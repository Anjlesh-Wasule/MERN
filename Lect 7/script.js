let name1 = "Suresh";
let name2 = "Ramesh";

let marks1 = 30;
let marks2 = 50;

let scorer = name1;
let highestMarks = marks1;

// if(marks1 > marks2){
//   scorer = name1;
//   highestMarks = marks1;
// }else{
//   scorer = name2;
//   highestMarks = marks2;
// }

if(marks2 > marks1){
  scorer = name2;
  highestMarks = marks2;
}
console.log(scorer, "has scored highest marks =", highestMarks);


// ********Ternary Operator**********
// Q1: Number is even or odd
let num = 6;
let val = (num % 2 == 0) ? "even" : "odd";
console.log(num, "is", val);


// Q2: Check if the number is positive or negative
let numbe = 0;
let valu = (numbe >= 0) ? ((numbe == 0)? "neither positive nor negative" : "positive") : "negative"; 
console.log(numbe, "is", valu);

// Homework: All yesterday problems using ternary operator
let age = 19;
console.log(age >= 18 ? "You can vote" : "You cannot vote");

let num1 = 12;
console.log((num1 / 2) % 2 == 0 ? "Half of number is even" : "Half of number is odd");

let a1 = "12";
const b1 = 12;
a1 == b1 ? console.log("a and b has same value") : "";

let d = 12;
d === b1 ? console.log("d and b has same value and datatype") : "";

let score = 40;
console.log(
  score >= 80 ? "Grade A" :
  score >= 60 ? "Grade B" :
  score >= 40 ? "Grade C" :
  "Fail"
);

let gender = "Male";
(age >= 18 && gender === "Male")
  ? console.log("Mature boy")
  : (age >= 18 && gender === "Female")
  ? console.log("Mature girl")
  :"";

let ticketNo = 11;
console.log((ticketNo == 11 || ticketNo == 101) ? "You are lucky draw winner" : "Sorry! Try again next time");

let isLoggedIn = true;
let hasSubscription = true;
console.log((isLoggedIn && hasSubscription) ? "Premium user, giving access to premium content" : "Please upgrade your plan");

let number = 17;
console.log(number != 17 ? "Number is good" : "Number is Bad");

let myNumber = 12.5;
let conversion = Math.floor(myNumber);
console.log(conversion == myNumber ? "is an integer" : " is a decimal number");

let n1 = 10, n2 = 12;
let value = n1 > n2 ? (console.log("n1 is greater"), n1) : (console.log("n2 is greater"), n2);
console.log("Greater value is", value);

// Print name and score of highest scoring student using ternary operator
let topScorer = (marks1 > marks2) ? name1 : name2;
let topMarks = (marks1 > marks2) ? marks1 : marks2;
console.log(topScorer, "has scored highest marks =", topMarks);

// Print greatest of three numbers using ternary operator
let a = 10, b = 20, c = 15;
let greatest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log("Greatest number is", greatest);

// Max and min of two numbers;
let maxNumber = Math.max(10, 20);
let minNumber = Math.min(10, 20);
console.log("Max number is", maxNumber);
console.log("Min number is", minNumber);


//Explore: Max and min of three or more numbers;
let number1 = 10, number2 = 20, number3 = 30;
let greatestAmongThree = Math.max(number1, number2, number3);
let smallestAmongThree = Math.min(number1, number2, number3);
console.log("Greatest among three is", greatestAmongThree);
console.log("Smallest among three is", smallestAmongThree);

// 1-> Monday
// 2-> Tueday
// 3-> Wenesday

let day = 6;
let dayName = (day == 1)? "Monday" : 
              (day == 2)? "Tuesday" :
              (day == 3)? "Wednesday" :
              (day == 4)? "Thursday" :
              (day == 5)? "Friday" :
              (day == 6)? "Saturday" :
              (day == 7)? "Sunday" : "Invalid day";
console.log(dayName);


// Switch case
switch(day){
  case 1: console.log("Monday"); 
  break; 

  case 2: console.log("Tueday"); 
  break; 

  case 3: console.log("Wednesday"); 
  break; 

  case 4: console.log("Thursday"); 
  break; 

  case 5: console.log("Friday"); 
  break; 

  case 6: console.log("Saturday"); 
  break; 

  case 7: console.log("Sunday"); 
  break; 

  default: console.log("Invalid day");
}

// Make grading system using switch case
let marks = 95;

switch(true){ 

  case (marks>= 80 && marks <= 100):
    console.log("Grade A");
    break;

  case (marks >= 60):
    console.log("Grade B");
    break;

  case (marks >= 40):
    console.log("Grade C");
    break;

  default:
    console.log("Fail");
}

// let n = 312;
// let rev = 0;
// let temp = n;

// while (temp > 0) {
//   let digit = temp%10;
//   rev = rev*10 + digit;

//   temp = temp/10;
// }
// console.log(rev); 