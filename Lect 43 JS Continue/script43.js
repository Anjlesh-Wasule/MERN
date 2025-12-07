// Linear search
function linearSrch(arr, tar){
  for(let i=0 ; i<arr.length ; i++){
    if(arr[i] == tar) return i;
  }
  return -1;
}

let arr = [1,2,3,4,5,6,7];
console.log("Element at index:", linearSrch(arr, 4));

// Que: Find all occurences of an element in an array
function findOccurences(arr, tar){
  let occurences = [];
  for(let i=0 ; i<arr.length ; i++){
    if(arr[i] == tar) {
      occurences.push(i);
    }
  }
  
  if(occurences.length == 0) occurences.push(-1);

  return occurences;
}

let ans = findOccurences([1,2,2,3,2,4,5], 2);
console.log(ans);




// Que: Find min element in an array
function findMinEle(arr){
  let mini = arr[0];

  for(let i=1 ; i<arr.length; i++){
    if(arr[i] < mini){
      mini = arr[i];
    }
  }
  return mini;
}

console.log(findMinEle([34,4,6,5,3,4,65,34]));


// Que: Find word in a sentence
let sentence = "I love coding in Cpp and Js";
function findWord(sen, tar){
  let words = sen.split(" ");
  
  for(let word of words){
    if(word === tar) return true;
  }

  return false;
}

console.log(findWord(sentence, "coding"));


// =============================== Binary Search ===============================
// sorted arr
let arr1 = [12,23,34,45,56,67,78,89,90];
// Binary Search
function binSrch(arr, target){
  let start = 0, end = arr.length-1;

  while(start <= end){
    let mid = start + Math.floor((end-start)/2);

    if(arr[mid] === target){
      return mid;
    }
    else if(target > arr[mid]){
      start = mid + 1;
    }
    else{
      end = mid - 1;
    }
  }

  return -1;
}

console.log("Element found at index:" ,binSrch(arr1, 67));



// Que: Finding square root of a number using binary search
function findSqRoot(n){
  let start = 1, end = n/2;
  while(start <= end){
    let mid = start + Math.floor((end-start)/2);

    if(mid*mid == n){
      return mid;
    }else if(mid*mid > n){
      end = mid -1 ;
    }else{
      start =  mid + 1;
    }
  }

  return n + " doesn't have a perfect square root";  
} 

console.log(findSqRoot(121));
console.log(findSqRoot(32));


function lowerBound(arr, n ,target){
  let start = 0;
  let end = n-1;

  let ans = n;

  while(start <= end){
    let mid = Math.floor((start+end)/2);

    if(arr[mid] >= target){
      ans = mid;
      end = mid - 1;
    }
    else{
      start = mid + 1;
    }
  }
  return ans;
}

function UpperBound(arr, n ,target){
  let start = 0;
  let end = n-1;

  let ans = n;

  while(start <= end){
    let mid = Math.floor((start+end)/2);

    if(arr[mid] > target){
      ans = mid;
      end = mid - 1;
    }
    else{
      start = mid + 1;
    }
  }
  return ans;
}


// let arr = [1,2,3,4,4,5];
let array = [2,3,3,3,5,7,9];
console.log(`Lower Bound: ${lowerBound(array, array.length, 3)} and Upper Bound: ${UpperBound(array, array.length, 3)}`);

// Find how many duplicates are there in an array.
