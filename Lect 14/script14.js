/* // Revised printing all subarrays
let arr = [1,4,5,7,3,2];

// function printAllSubarrays( arr ){
//   console.log("Printing all subarrays of: " + arr);
//   for(let i=0; i<arr.length; i++){
//     // let subarr = [];
//     for(let j=i ; j<arr.length ; j++){
//       // subarr.push(arr[j]);
//       // console.log(subarr);

//       // Method 2:
//       console.log(arr.slice(i,j+1));
//     }
//   }
// }
// printAllSubarrays(arr);


function sumOfAllSubarrays(arr){
  console.log("Printing the sum of all subarrays");
  let allSum = 0;
  for(let i=0; i<arr.length; i++){
    let sum = 0;
    for(let j=i ; j<arr.length ; j++){
      sum += arr[j];
      allSum += sum;
      console.log(sum); // all individual sum of subarrays
    }
    console.log("");
  }
  console.log("Sum of all subarrays together:",allSum);
}

sumOfAllSubarrays(arr);




// Que: Write a function to print subarray whose sum if equal to targetSum
function subarrayWithTargetSum(arr, tar){
  console.log("Printing the subarray whose sum if equal to targetSum");
  for(let i=0; i<arr.length; i++){
    let sum = 0;
    let subarr = [];
    for(let j=i ; j<arr.length ; j++){
      subarr.push(arr[j]);
      sum += arr[j];
      if(sum == tar) console.log(subarr);// all individual sum of subarrays
    }
  }
}

subarrayWithTargetSum(arr, 10); */








/* 
================== Nested Arrays ==================
arr = [ ["a", true, 17], ["xyz", false] ];
console.log(arr[1][0][2]); // Print z
console.log(arr.at(-1));  // Can print the element from END ⭐⭐⭐👀👀👀😈😈😈 
*/





let arr = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]];

/* function printAllElementsOfMatrix(arr){
  console.log("\nPrinting all elements of Matrix");
  for(let i=0 ; i<arr.length ; i++){
    let row = [];
    for(let j=0 ; j<arr[0].length ; j++){
      row.push(arr[i][j]);
    }
    console.log(row);
  }
}
printAllElementsOfMatrix(arr); 

// Print the sum of each row 

function printSumOfEachRow(arr){
  console.log("\nPrinting sum of each row of Matrix");
  let allSum = 0;
  for(let i=0 ; i<arr.length ; i++){
    let row = [];
    let rowSum = 0;
    for(let j=0 ; j<arr[0].length ; j++){
      rowSum += arr[i][j];
      row.push(arr[i][j]);
    }
    console.log("Sum for",row, "is", rowSum);
    allSum += rowSum;
    
  }
  console.log("Printing sum of all elements is", allSum);
}

printSumOfEachRow(arr);




// Print the sum of product of elements of each even indexed row
function printSumOfEachRow(arr){
  console.log("\nPrinting the sum of product of elements of each even indexed row");
  let evenRowSum = 0;

  for(let i=0 ; i<arr.length ; i+=2){
    let row = [];
    let rowProduct = 1;

    for(let j=0 ; j<arr[0].length ; j++){
      rowProduct *= arr[i][j];
      row.push(arr[i][j]);
    }

    console.log("Product for",row, "is", rowProduct);
    evenRowSum += rowProduct;
    
  }
  console.log("Sum is", evenRowSum);
}
 */

/* 
function printAllEleInColOrder(arr){
  console.log("\nPrinting all elements of Matrix in Column Order");
  for(let i=0 ; i<arr[0].length ; i++){
    let col = [];
    for(let j=0 ; j<arr.length ; j++){
      col.push(arr[j][i]);
    }
    console.log(col);
  }
}
printAllEleInColOrder(arr);
 */

// Print all elements of primary diagonal
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

function printDiagonalElements(matrix){
  console.log("\nPrinting the primary Diagonal elements");
  let diaElements = [];
  for(let i=0 ; i<matrix.length ; i++){
    diaElements.push(matrix[i][i]);
  }
  console.log(diaElements);
}

printDiagonalElements(matrix);



function printSecondaryDiaElements(matrix){
  console.log("\nPrinting the Secondary Diagonal elements");
  let diaElements = [];
  // for(let i=0 ; i<matrix.length ; i++){
  //   for(let j=0 ; j<matrix.length ; j++){
  //     if(i + j == matrix.length - 1){  // here 3-1 = 2
  //       diaElements.push(matrix[i][j]);
  //     }
  //   }
  // }

  for(let i=0 ; i<matrix.length ; i++){
    // i + j = n - 1, where n is matrix.length
    // j = n - i - 1
    diaElements.push(matrix[i][matrix.length - i - 1]);
  }

  console.log(diaElements);
}

printSecondaryDiaElements(matrix);








// Function to check if primary diagonal sum is odd or even
function checkDiagonalSum(matrix){
  console.log("\nChecking Even/Odd sum of primary diagonal");
  let diaElements = [];
  let sum = 0;
  for(let i=0 ; i<matrix.length ; i++){
    sum += matrix[i][i];
    diaElements.push(matrix[i][i]);
  }
  console.log(diaElements, "has sum", sum, "that is", (sum%2 == 0)? "Even" : "Odd");
}

checkDiagonalSum(matrix);