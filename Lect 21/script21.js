// Linear Search
function linearSearch(arr, target){
  let n = arr.length;
  for(let i=0 ; i<n ; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}



console.log(linearSearch([12,23,34,6,2,47], 6));

// return if target value exists in the array
function BooleanLinearSearch(arr, target){
  let n = arr.length;
  for(let i=0 ; i<n ; i++){
    if(arr[i] === target){
      return true;
    }
  }
  return false;
}
console.log(BooleanLinearSearch([12,23,34,6,2,47], 61));



// Linear search on string
function linearSearchString(str, ch){
  let n = str.length;

  for(let i=0 ; i<n ; i++){
    if(str[i] === ch){
      return 1;
    }
  }
  return -1;
}

console.log(linearSearchString("Hello", "l"));
console.log(linearSearchString("Hello", "f"));





// LINEAR SEARCH WITH OBJECTS / ARRAY OF OBJECTS
let users = [
  {id: 1, name: "Anjlesh", city:"Pune", age: 22},
  {id: 2, name: "Raj", city:"Baner", age: 20},
  {id: 3, name: "Ram", city:"Pune", age: 22},
  {id: 4, name: "Ram", city:"Baner", age: 23},
  {id: 5, name: "Kumar", city:"Aundh", age:32},
];

function findUserDataByName(users, name){
  for(let user of users){
    if(user.name === name){
      return user;
    }
  }
  return null;
}

console.log(findUserDataByName(users, "Raj"));
console.log(findUserDataByName(users, "Ram")); // gives the first one to occur in the array (normal array traversal behaviour)
console.log(findUserDataByName(users, "Ravi"));





// Map => remembers the original insertion order 
// Creating a Map

// 1. Using Constructor
let myMap = new Map();

// Common Map Methods
// 1. set(key, value) => adds or updates an entry
myMap.set("101","Jay");
myMap.set("102","Ram");
myMap.set("103","Raj");


// 2. get(key) => returns the value of the specified key
console.log(myMap.get("101")) ;

// 3. has(key) => checks if the map contains a key
console.log(myMap.has("103")) ;

// 4. delete(key) => Removes a key-value pair
myMap.delete("102");
console.log(myMap);

console.log(myMap.size); 


// 5. clear() => Removes all the entries of map
myMap.clear();


// 6. size() => Returns the number of entries
console.log(myMap.size);  // 0 because we deleted all the entries




// Count the frequency of the number in an array
let arr = [10, 20, 30, 20, 10, 10]; 

function countFreq(arr){
  let freqMap = new Map();
  for(let num of arr){
    if(freqMap.has(num)){
      freqMap.set(num, freqMap.get(num) + 1);
    }
    else{
      freqMap.set(num, 1);
    }
  }
  console.log(freqMap);
}
countFreq(arr);



function countFreqInString(str){
  let freqMap = new Map();
  for(let ch of str){
    if(freqMap.has(ch)){
      freqMap.set(ch, freqMap.get(ch) + 1);
    }
    else if(ch != ' ') {
      freqMap.set(ch, 1);
    }
  }
  console.log(freqMap);
}
countFreqInString("hello world");





// Set in JS => only unique values, doesn't allows duplicates
// syntax: 
let mySet = new Set();

// set Methods
// 1. add(value) => adds value to the set
mySet.add("Apple");
mySet.add("Mango");
mySet.add("Orange");
mySet.add("Apple");

// 2. has()  
mySet.has("Apple");
console.log(mySet);

// 3. delete() => deletes 
mySet.delete("Mango");
console.log(mySet);



// Anagram
function checkAnagramWithSorting(s1, s2){
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(checkAnagramWithSorting('silent', 'listen'));
console.log(checkAnagramWithSorting('siletu', 'listen'));



function checkAnagramWithMap(s1, s2){
  if(s1.length != s2.length) return false;

  let freqMap = {};
  for(let ch of s1){
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }

  // now check if these characters exists in the freqMap
  for(let ch of s2){
    if(!freqMap[ch]) return false;

    freqMap[ch] -= 1; 
  }
  return true;
}


console.log(checkAnagramWithMap('silent', 'listen'));
console.log(checkAnagramWithMap('siletu', 'listen'));