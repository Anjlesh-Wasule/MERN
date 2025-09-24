// Sum of all subarrays with k length and total sum of all k length subarrays
let arr = [7,4,8,6,5];

function kLenSubarray(arr, n, k){
  let windowSum = 0;
  let totalSum = 0;
  for(let i=0 ; i<k ; i++){
    windowSum += arr[i];
  }
  console.log("Sum of", arr.slice(0,k), "is", windowSum);
  totalSum += windowSum;


  for(let i=k ; i<n ; i++){
    windowSum += arr[i] - arr[i-k];
    console.log("Sum of", arr.slice(i-k+1, i+1), "is", windowSum);
    totalSum += windowSum;
  }
  console.log("Total Sum of k length subarrays is", totalSum);
}

// kLenSubarray(arr,arr.length,3);





// Reverse each row of 2d matrix
input = [
    [1,2],
    [2,3,4,5],
    [3,4,5,6]
];

function reverseEachRow(mat){
  for(let i=0 ; i<mat.length ; i++){
    mat[i].reverse();
  }
  console.log(mat);
}

// reverseEachRow(input);

