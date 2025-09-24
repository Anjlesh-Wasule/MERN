// Printing all the subarrays 
let arr = [1,4,5,7,3,2];

function printAllSubarrays(arr, n){
  for(let i=0 ; i<n ; i++){
    for(let j=i ; j<n ; j++){
      console.log(arr.slice(i,j+1));
    }
  }
}

// printAllSubarrays(arr,arr.length);




// Printing the sum of all the subarrays
function printSumOfAllIndividualSubarrays(arr,n){
  for(let i=0 ; i<n ; i++){
    let sum = 0;
    for(let j=i ; j<n ; j++){
      sum += arr[j];
      console.log("Sum of", arr.slice(i,j+1), "is", sum);
    }
  }
}

// printSumOfAllIndividualSubarrays(arr,arr.length);



//print subarray whose sum if equal to targetSum
function findSubarrayWithTargetSum(arr, n, targetSum){
  for(let i=0 ; i<n ; i++){
    let sum = 0;
    for(let j=i ; j<n ; j++){
      sum += arr[j];
      if(sum === targetSum)
        console.log(arr.slice(i,j+1), "has targetSum.");
    }
  }
}
// findSubarrayWithTargetSum(arr, arr.length, 10);



// Print the sum of each row in nested array
let nestedArr = [[1,2,3,4,5], [6,7,8,9], [11,12,13,14,15]];
function printSumOfEachRow(arr){
  let n = arr.length;
  for(let i=0 ; i<n ; i++){
    let sum = 0;
    for(let j=0 ; j<arr[i].length ; j++){
      sum += arr[i][j];
    }
    console.log("Sum of", arr[i], "is", sum);
  }
}

// printSumOfEachRow(nestedArr);



// print sum of all elements of matrix using sum of each row
function printSumAll(arr){
  let n = arr.length;
  let totalSum = 0;
  for(let i=0 ; i<n ; i++){
    let sum = 0;
    for(let j=0 ; j<arr[i].length ; j++){
      sum += arr[i][j];
    }
    console.log("Sum of", arr[i], "is", sum);
    totalSum += sum;
  }
  console.log("Sum of all elements is",totalSum);
}

// printSumAll(nestedArr);



let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

function printMatrixInColOrder(mat){
  let arr = [];
  for(let i=0 ; i<mat[0].length ; i++){ // cole
    for(let j=0 ; j<mat.length ; j++){ // row
      arr.push(mat[j][i]);
    }
  }
  console.log(arr.join(' '));
}

printMatrixInColOrder(matrix);