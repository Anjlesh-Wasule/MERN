// Recursion Revision 
// Que: Finding Factorial of a number
function findFactorial(n){
  if(n === 1 || n === 0){
    return 1;
  }
  
  return n*findFactorial(n-1);
}

// console.log(findFactorial(5));




// Que: Calculate base to the power of exponent
function calcPower(base, expo){
  if(expo === 1) return base;

  return base * calcPower(base, expo-1);
}

// console.log(calcPower(5,1));
// console.log(calcPower(5,2));
// console.log(calcPower(5,3));




// Que: Find sum of all elements in an array
function sum(arr, index=0){
  if(index === arr.length - 1) return arr[index];

  return arr[index] + sum(arr, index+1);
}

// console.log(sum([1,2,3,4,5]));





// Que: Reverse the string using recursion
function reverseString(str, index = str.length - 1, result = "") {
  if (index < 0) return result;        // base case

  result += str[index];                // add current char
  return reverseString(str, index - 1, result);
}

console.log(reverseString("Hello")); // "olleH"









/* =========== Helper Recursive Function =========== */ 
function findOddNumbers(arr){
  let oddNumbers = [];

  function helper(index){
    if(index === arr.length) return;

    if(arr[index]%2){
      oddNumbers.push(arr[index]);
    }

    return helper(index+1);
  }

  helper(0);

  return oddNumbers;
}

console.log(findOddNumbers([1,2,3,4,5]));
