// ======================== ******* MERGE SORT ******* ========================


// Divide: Divide the list or array recursively into two halves until it can no more be divided.
// Conquer: Each subarray is sorted individually using the merge sort algorithm.
// Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.


// divide the array in two parts 
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) {
    return arr;
  }

  // Find middle and split
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort both halves
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  // Merge them together
  return merge(sortedLeft, sortedRight);
}

function merge(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

let arr = [3, 4, 6, 2, 1];

console.log(mergeSort(arr));












// ======================== ******* QUICK SORT ******* ========================

function quickSort(arr, start=0, end=arr.length-1){
  if(start < end){
    const pivotIdx = partition(arr, start, end);

    quickSort(arr, start, pivotIdx-1);
    quickSort(arr, pivotIdx+1, end);
  }

  return arr;
}

function partition(arr, start=0, end){

  const pivot = arr[end]; // last element is taken as the pivot element always
  let j = start; // compares each element with the pivot element
  let i = start-1; // will be used to swap elements that are less than the pivot element


  while(j<end){
    if(arr[j] < pivot){
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }

  // at last swap/ put the pivot at its corrrect place in the current array
  [arr[i+1], arr[j]] = [arr[j], arr[i+1]];

  // return index of pivot element
  return i+1;
}

console.log(quickSort([7,4,6,2,4]));