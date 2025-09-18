function factorial(n=0){
  let fact=1;
  for(let i=n; i>1; i--){
    fact *= i;
  }
  return fact;
}
console.log("Factorial is:", factorial(5));

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

let names = [
  "Name1",
  "Name2",
  "Name3",
  "Name4",
  "Name5",
  "Name6",
  "Name7",
];
console.log(names.length);
console.log("Third name from the array:", names[2]);
console.log("Printing all the elements of the array");
for(let i=0 ; i<names.length; i++){
  console.log(names[i]);
}

const arr1 = [1,2,3,4,5,6,7,8];
let n1 = arr1.length;

function sumOfArray(arr, n){
  let sum = 0;
  for(let i=0 ; i<n ; i++){
    sum += arr[i];
  }
  return sum;
}
let sum = sumOfArray(arr1,n1);
console.log({sum});

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
let difference = oddEvenDiff(arr1, n1);
console.log({difference});

function fizzBuzz(arr, n){
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

const array = [1,2,3,4,5];
array.push(100);
console.log(array);

array.unshift(-54);
console.log(array);

array[2] = 1000;
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

const arr = [5, 7, 3, 10, 23, 12, 10];

function findIndex(arr, tragetValue){
  let indexOfTargetValue = -1;
  return indexOfTargetValue;
}

console.log("Index of 23 in Array", arr.indexOf(23));
console.log("Last index of 10 is:", arr.lastIndexOf(10));
console.log(arr.includes(18));

if(arr.includes(10)){
  let index = arr.indexOf(10);
  arr[index] = 14;
}
console.log(arr);
