// Revision of Binary Search, Linear Search, Map and Set

let set = new Set();
set.add(10);
set.add(30);
set.add(20);
set.add(30);
console.log(set);
console.log(set.size);
console.log(set.has(30));
console.log(set.has(3));


// Convert set to array
let colors = new Set(['red', 'green', 'blue']);
let colorArray = Array.from(colors);
console.log(`colorArray: ${colorArray}`);

let setA = new Set([1,2,3,4,5]);
let setB = new Set([3,2,5,6,8]);


// find common elements in two sets
let common = [];
for(let item of setA){
  if(setB.has(item)) common.push(item);
}
console.log(common);


// check subset relationship
setA = new Set([1,3]);
setB = new Set([1,2,3]);

function checkSubset(setA, setB){
  for(let item of setA){
    if(!setB.has(item)) return false;
  }
  return true;
}

console.log(checkSubset(setA, setB)); // A is subset of B




// Find missing number using set 
// return [1,4]
let arr1 = [1,2,3,4,5];
let arr2 = [2,3,5];

setA = new Set(arr1);
setB = new Set(arr2);

function findMissingNumber(setA, setB){
  let result = [];

  for(let num of setA){
    if(!setB.has(num)) result.push(num);
  }

  for(let num of setB){
    if(!setA.has(num)) result.push(num);
  }

  console.log(result);

}

findMissingNumber(setA, setB);





// Map
let marks = new Map();
marks.set('Rahul', 90);
marks.set('Priya', 85);
marks.set('Amit', 88);

for(let [name, score] of marks){
  console.log(name, "->", score);
}


// double the elements
let nums = [1,2,3];
let double = nums.map(x => x*2);
console.log(double);




// Normalise String
// 'Hi', 'Bye' => 'hi' , 'bye'
let strArr = ['Hi', 'Bye'];
let normalised = strArr.map(x => x.toLowerCase());
console.log(normalised);


// find lowerBound and upper bound
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
let arr = [2,3,3,3,5,7,9];
console.log(`Lower Bound: ${lowerBound(arr, arr.length, 3)} and Upper Bound: ${UpperBound(arr, arr.length, 3)}`);