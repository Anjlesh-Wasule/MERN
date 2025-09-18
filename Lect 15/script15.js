// Que: Write a function to find the sum of all subarrays whose size is k
// arr = [7,4,8,6,5], k=3 => 56
let arr = [7,4,8,6,5];

function printSubarrayLengthK(arr, k){
  // let totalSum = 0;
  // for(let i=0 ; i<arr.length; i++){
  //   let subarr = [];
  //   let sum = 0;

  //   for(let j=i ; j<arr.length ; j++){
  //     subarr.push(arr[j]);
  //     sum += arr[j];

  //     if(subarr.length === k){
  //       console.log(subarr, sum);
  //       totalSum += sum;
  //     }
  //   }
  // }
  // console.log("Total sum of k length subarrays=",totalSum);

  let lengthKSum = 0;
  let totalSum = 0;

  for (let i = 0; i < k; i++) {
    lengthKSum += arr[i];
  }
  totalSum += lengthKSum;

  for (let i = k; i < arr.length; i++) {
    lengthKSum += arr[i] - arr[i - k];
    totalSum += lengthKSum;
  }

  console.log("Total Sum:", totalSum);
}

printSubarrayLengthK(arr, 3);



// Que: Check Matrix or Not
const arr1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
const arr2 = [
  [1,2,3,4],
  [2,3,4,5],
  [3,4,5,6]
];


// isArray => checks if given is array or not
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(arr1[4]));
// console.log(Array.isArray(arr2));

function isMatrix(arr){
  if(Array.isArray(arr)){
    let firstLen = arr[0].length;

    for(let i = 1 ; i < arr.length ; i++){
      
      if(!Array.isArray(arr[i]) || arr[i].length != firstLen){
        return false;
      }
    }
  }
  return true;
}

console.log(isMatrix(arr1)) ;
console.log(isMatrix(arr2)) ;
console.log(isMatrix([12,34,45,56])) ; // 1-D array





// Que: Reverse each row of a nested 2D array
/* 
  input = [
    [1,2],
    [2,3,4,5]
    [3,4,5,6]
  ]

  output = [
    [2,1],
    [5,4,3,2]
    [6,5,4,3]
  ]
*/

function reverse2DArray(arr){
  for(let i=0 ; i<arr.length ; i++) arr[i] = arr[i].reverse();
  
  console.log(arr);
  // console.log(arr.reverse()); //.......reversing the whole array; 
}

reverse2DArray(input = [ [1,2], [2,3,4,5], [3,4,5,6] ]); 


/* Homework

  Reverse columns of a 2D Matrix

*/