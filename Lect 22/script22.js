// Que: Remove duplicates from a string
function removeDuplicates(str) {
  let st = new Set();
  let result = "";

  for (let ch of str) {
    if (!st.has(ch)) {
      result += ch;
      st.add(ch);
    }
  }

  return result;
}
// console.log(removeDuplicates("hello"));
// console.log(removeDuplicates("helloworld"));

// Que: Find pairs with given sum
function findSum(arr, n, sum) {
  let mp = {};

  for (let num of arr) {
    mp[num] = (mp[num] || 0) + 1;
  }

  let count = 0;

  for (let num of arr) {
    let remain = sum - num;

    if (mp[remain] > 0) {
      count++;
      mp[remain]--;
    }
  }

  return Math.floor(count / 2);
}

// console.log(findSum([1,2,2,3,4], 5, 5));

// USING MAP
function findSumWithMap(arr, n, sum) {
  let mp = new Map();

  for (let num of arr) {
    mp.set(num, (mp.get(num) || 0) + 1);
  }

  let count = 0;

  for (let num of arr) {
    let remain = sum - num;

    if (mp.has(remain)) {
      count++;
      // console.log(num, remain);
      mp.set(num, mp.get(num) - 1);
    }
  }

  return Math.floor(count / 2);
}

// console.log(findSumWithMap([1,2,2,3,4], 5, 5));
// console.log(findSumWithMap([2,2,2,2], 5, 4));

// Que: Minimum deletion to make anagram
function minDeletions(word1, word2) {
  let freqMap1 = new Map();
  for (let ch of word1) {
    freqMap1.set(ch, (freqMap1.get(ch) || 0) + 1);
  }

  let freqMap2 = new Map();
  for (let ch of word2) {
    freqMap2.set(ch, (freqMap2.get(ch) || 0) + 1);
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    let ch = String.fromCharCode(97 + i);
    count += Math.abs((freqMap1.get(ch) || 0) - (freqMap2.get(ch) || 0));
    // if(!freqMap1.has(ch) && freqMap2.has(ch)) console.log("Delete", ch, "from", word2);
    // if(!freqMap2.has(ch) && freqMap1.has(ch)) console.log("Delete", ch, "from", word1);
  }
  return count;
}

// console.log(minDeletions("star", "tars")); // 0
// console.log(minDeletions("star", "tarzan")); // 4











// <<<<<==================================== BINARY SEARCH ====================================>>>>>

// Binary Search => works on a sorted array only

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(arr, target) {
  let n = arr.length;
  let start = 0;
  let end = n - 1;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == target) return mid;
    else if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return -1; // not found
}

// console.log(binarySearch(arr, 8));

function firstOccurence(arr, target) {
  //  arr = [1,1,1,1,1];

  let n = arr.length;
  let start = 0;
  let end = n - 1;
  let ans = -1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == target) {
      ans = mid;
      end = mid - 1;
    } else if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return ans;
}

// console.log(firstOccurence([1,2,3,4,4], 4));

// Que: first occurence in a string
arr = ["apple", "banana", "banana", "bau", "cherry", "date"];

function firstOccurenceInString(arr, target) {
  let n = arr.length;
  let start = 0;
  let end = n - 1;
  let ans = -1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == target) {
      ans = mid;
      end = mid - 1;
    } else if (target > arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return ans;
}

console.log("Found at", firstOccurenceInString(arr, "bau"));

// Que: Lower Bound & Upper bound of a number
// LowerBound => index of the first element that is >= target;
// UpperBound => index of first element strictly > target
// ClassWORK 😈😈😈😈😈😈💀💀💀💀
arr = [1, 2, 4, 4, 5, 6, 7, 9];

function findLowerBoundIdx(arr, x){
  let n = arr.length;
  let start = 0, end = n-1;
  let idx = 0;
}

function findUpperBoundIdx(arr, x){

}

function lowerUpperBound(arr, x) {
  let lower = findLowerBoundIdx(arr, x);
  let upper = findUpperBoundIdx(arr, x);;

  return [lower, upper];
}












// Que: First and last Occurence of element in an array
function firstAndLast(arr, x){
  return [arr.indexOf(x), arr.lastIndexOf(x)];
}

console.log(firstAndLast([1,2,2,3,2], 2));


let mp = new Map();

let arr1 = [1,2,2,3,5,4,4,4]; 

for(let num of arr1){
  mp.set(num, (mp.get(num) || 0) + 1);
}

console.log(mp);

for(let p of mp){
  console.log(p);
}




/* function convertKeyboardLayout(layout1, layout2, text) {
  let mp = new Map();
  for(let i=0 ; i<layout1.length ; i++){
    mp.set(layout1[i], layout2[i]);
  }

  let result = "";
  for(ch of text){
    if(ch.toUpperCase() === ch){
      result += (mp.get(ch.toLowerCase()).toUpperCase());
    }
    else{
      result += mp.get(ch);
    }
  }
  return result;
}


console.log(convertKeyboardLayout("qwertyuiopasdfghjklzxcvbnm", "veamhjsgqocnrbfxdtwkylupzi", "FpcpEbb2019"));
 */

let a = '2';
console.log('a'.toUpperCase() === 'a');