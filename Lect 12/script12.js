/* // Write a function to find the average of 3 numbers
function average(a=0,b=0,c=0){
  return (a+b+c)/3;
}

console.log("Average is:", average(3,7,9));



// Write a function to find the factorial of a number
function factorial(n=0){
  let fact=1;
  for(let i=n; i>1; i--){
    fact *= i;
  }
  return fact;
}

console.log("Factorial is:", factorial(5));



// Write a program to find nCr
// nCr = n!/((n-r)! * r!)
function nCr(n=0, r=0){
  if(r>n){
    return "Invalid input";
  }
  return(factorial(n) / (factorial(n-r) * factorial(r)));
}

console.log("nCr is:", nCr(3,2));



function canVote(userAge, userName){
  if(userAge>18){
    console.log(userName, "you can Vote!");
  }else{
    console.log("Sorry",userName,"you cannot vote.");
  }
}
canVote(22,"Deep");
canVote(7,"Advait");
 */



/* =================================  Arrays in JS  ======================================= */



/* 
let names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",

]


console.log(names.length);

// Printing single element from name
console.log("Third name from the array:", names[2]);

// Printing all the elements of the array
console.log("Printing all the elements of the array");
for(let i=0 ; i<names.length; i++){
  console.log(names[i]);
} */


/* const arr = [1,2,3,4,5,6,7,8];
let n = arr.length;

function sumOfArray(arr, n){
  let sum = 0;
  for(let i=0 ; i<n ; i++){
    sum += arr[i];
  }
  return sum;
}

let sum= sumOfArray(arr,n);
console.log({sum});

// Find the absolute difference of sum of odd elements and sum of all even element
// T.C => O(n), where n is the size of the array
function oddEvenDiff(arr, n){

  let oddSum=0, evenSum = 0;
  
  for(let i=0 ; i<n ; i++){
    if(arr[i]&1 == 1)
      oddSum += arr[i];

    else
      evenSum += arr[i];
    
  }
  return Math.abs(oddSum - evenSum);
}

let difference = oddEvenDiff(arr, n);
console.log({difference}); */




/* FizzBuzz Problem
 you're given an array, write a function which print in below manner
- Fizz if multiple of 3
- Buzz if multiple of 5
- FizzBuzz if multiple of both 3 and 5
*/

/* function fizzBuzz(arr, n){
  for(let i=0 ; i<n ; i++){
    if(arr[i]%3==0 && arr[i]%5 == 0){
      console.log("FizzBuzz");
    }
    else if(arr[i]%3==0){
      console.log("Fizz");
    }
    else if(arr[i]%5==0){
      console.log("Buzz");
    }
    else{
      console.log(arr[i]);
    }
  }
}

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
fizzBuzz(nums, nums.length);
// T.C => O(n), where n is the size of the array */

/* 
// Insertion in array
const array = [1,2,3,4,5];
array.push(100); // adds value at the end of the array
console.log(array);
// HomeWork: How to insert multiple values using push??? 😈😈


array.unshift(-54); // adds value at the start of the array
console.log(array);
// HomeWork: How to insert multiple values using unshift??? 😈😈



ANSWER: You can use the spread operator to insert multiple values using push and unshift methods.
array.push(...[200, 300, 400]); // adds multiple values at the end of the array


// Array is a non-primitive data type, so the values can be changed
// but you CANNOT reassign the array
array[2] = 1000; // changing value at index 2
console.log(array);
// array = [1,2,3]; // This will throw an error


array.pop(); // removes the last element from the array
// returns the deleted element
console.log(array);

array.shift(); // removes the first element from the array
console.log(array);
*/





/* Searching in an Array */

/* 
Homework: Write a function to search for an element in an array and return its index.
If not found, return -1. Consider array has unique elements
*/

const arr = [5, 7, 3, 10, 23, 12, 10];

function findIndex(arr, tragetValue){
  let indexOfTargetValue = -1;




  return indexOfTargetValue;
}

/* Inbuilt Method to find the first index */
console.log("Index of 23 in Array", arr.indexOf(23)); // returns index if the element exists else -1, if its not.


/* Inbuilt method to find the last occuring index of an element */
console.log("Last index of 10 is:", arr.lastIndexOf(10));


/* Inbuilt method to check if an element is present or not */
console.log(arr.includes(18)); // return true if present else false



/* Que: Find and update the value of element=10 to 14 uisng indexOf and includes method */
if(arr.includes(10)){
  let index = arr.indexOf(10);
  arr[index] = 14;
}
console.log(arr);



