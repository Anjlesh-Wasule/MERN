/* Printing the kaju-Katli \
   


   *
  ***
 *****
*******
 *****
  ***
   *


*/

/* 
| Row | Spaces | Stars |          |
| --- | ------ | ----- | -------- |
| 1   | 3      | 1     |          |
| 2   | 2      | 3     |          |
| 3   | 1      | 5     |          |
| 4   | 0      | 7     | ← middle |
| 5   | 1      | 5     |          |
| 6   | 2      | 3     |          |
| 7   | 3      | 1     |          |

*/


let n = 7;
function printDiamondPattern(n){
  
  // Printing the L1
  let m = Math.floor(n/2);
  
}



/* ============================= Continuing Arrays =============================  */


let arr = [1,2,3,4,5,6,7,8];
console.log("Original array", arr,"\n");
/* SLICE(start, end) => gives a copy of original array from start index to end-1 index
  - if start is not given, it is considered as 0
  - if end is not given, it is considered as arr.length
*/
console.log("Slice Operation:",arr.slice(2,5),"\n"); // [3,4,5]

/* HOMEWORK - Check what happens if negative values are passed in slice 😈😈😈😈 */
// => arr.slice(-4, -1) => [5,6,7]
console.log("Slice Operation with negative values:",arr.slice(-4, -1),"\n"); // [5,6,7]
// => arr.slice(-4) => [5,6,7,8]



/* SPLICE (startingIdx, count of elements to be deleted) => starts from an index and
 actually deletes the count no.of elements from the array;

 - CHANGES the ORIGINAL ARRAY.

*/


console.log("Splice Operation:" ,arr.splice(1,3));
console.log("Array after splice operation", arr,"\n");




/* CONCAT */
let arr2 = [-3, -4, -10, -8];
console.log("Concat Operation" ,arr.concat(arr2));
console.log("CONCAT Doesn't chanage the original array: ",arr,"\n");



/* ============================= Types of Loops in array =============================  */

/* For in loop */
console.log("Array traversal using FOR-IN LOOP")
for(let index in arr){
  console.log(arr[index]);

  // console.log("typeof index") ----> type of index here is "string" 
}


/* For-of Loop */
console.log("\nArray traversal using FOR-OF LOOP")
for(let value of arr){
  console.log(value);

  // console.log("typeof value") ----> type of value here is "number" 
}
console.log("\n");

// Que: Write a program to print the prefix sum of array
let array1 = [12, 4, -8, 10];

function findPrefixSum(arr){
  let prefixSumArr = [];
  let prefixSum = 0;
  for(let value of array1){
    prefixSum += value;
    prefixSumArr.push(prefixSum);
  }

  return prefixSumArr;
}

console.log("Prefix sum of the array", findPrefixSum(array1));

/* let a=10, b=20; 🤩🤩🤩⭐⭐⭐⭐👀👀👀😈😈😈😈
a,b = b,a; // Swapping of two variables
console.log({a}, {b}); */



/* Que: Swapping two values of an array 
input: [1, 2, 3, 4, 5], idx1 = 0, index2 = 4
output: [1, 5, 3, 4, 2]
*/
arr = [1, 2, 3, 4, 5];
function swapArrIdx(arr, idx1, idx2){
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // Changes the original array -> shallow copy
  console.log("\nSwapping the idx1 and idx2",arr);
}
swapArrIdx(arr, 1, 4);

/* Que: Print elements at odd index of an array

input: [1, 2, 3, 4, 5, 6]
output: [2, 4, 6]

 */
function printOddIdxElements(arr){
  console.log("\nPrinting the odd index elements:")
  for(let i=1 ; i<arr.length ; i+=2){
    console.log(arr[i]);
  }
}

printOddIdxElements([1, 2, 3, 4, 5, 6]);




/* Que swap the alternate elements of the array

input: [1, 2, 3, 4, 5]
output: [2, 1, 4, 3, 5]

input: [1, 2, 3, 4, 5, 6]
output: [2, 1, 4, 3, 6, 5]
*/

arr = [1, 2, 3, 4, 5];

function swapAlternateIdx(arr){
  console.log("\nSwapping the alternate elements of the array:");
  for(let i=1 ; i<arr.length ; i+=2){
    // if(i+1 < arr.length) 
      [arr[i], arr[i-1]] = [arr[i-1], arr[i]]; 
  }
  console.log(arr);
}

swapAlternateIdx(arr); // shallow copy, changes are reflected in the original array.

console.log("Array after swap: ",arr.join(", ")); 


let hetrogeneousArray = [1,2, "123", 2.344, true, [3, 4, "five", [2, 5, "printMe"]]];
console.log(hetrogeneousArray[5][3][2]);  


/* HomeWork:
  Given an array of consecutive numbers, but there's a number missing, find it 
  input: [1,2,3,5,6,7,8]
  output: 4
*/
/* Solution */


arr = [1, 4, 5, 7, 3, 2];
/* Print all the subarrays of given arrays */
console.log("\nPrinting all the subarrays of given array:");
for(let i=0 ; i<arr.length ; i++){
  let subarr = [];
  for(let j=i ; j<arr.length ; j++){
    subarr.push(arr[j]);
    console.log(subarr);
  }
  console.log("\n")
}

