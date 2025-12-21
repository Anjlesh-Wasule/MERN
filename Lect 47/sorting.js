// Sorting Techniques
let arr = [5,3,2,7,91,11];

function bubbleSort(arr){ // T.C = O(n2)
  let n = arr.length;

  for(let i=0 ; i<n-1; i++){ // n-1 passes to sort
    let swapped = false;
    for(let j=0 ; j<n-i-1 ; j++){ // each time the last element is at its correct position
      
      if(arr[j] > arr[j+1]){ // current element is greater than the next element
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // changes the original array
        swapped = true;
      }
    }
    if(!swapped) break; // breaking the loop as the array is already sorted.
  }

  return arr;
}
console.log("\n\n\n**** BUBBLE SORT ****");
console.log("Before:", [...arr], "\nAfter:", bubbleSort(arr));







// ======================== ******* SELECTION SORT ******* ========================

// we pick the minimum element
// then, we compare it to every element and put it at its correct place

function selectionSort(arr){
  let n = arr.length;

  for(let i=0 ; i<n-1 ; i++){
    let minIndex = i; // we consider that the first element is the smallest
    // now we explore if a smaller element exists into the array

    for(let j=i+1 ; j<n ; j++){
      if(arr[j] < arr[minIndex]){ // found new minIndex element
        minIndex = j;
      }
    }

    // put the min element at its correct position i.e the ith index
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}
console.log("\n\n\n**** SELECTION SORT ****");
console.log(selectionSort([9,8,7,6,5,4]));












// ======================== ******* INSERTION SORT ******* ========================

function insertionSort(arr){
  let n = arr.length;

  for(let i=1 ; i<n; i++){ // every time start from the second element and look at the left side
    // see if a the current element (key) is smaller than the elements on the left side
    let key = arr[i];
    let j = i-1; // points to the previous index (last index of the sorted side)

    while(j>=0 && arr[j] > key){
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = key;
  }

  return arr;
}

console.log("\n\n\n**** INSERTION SORT ****");
console.log(insertionSort(arr));