// Linear Search => also works on unsorted array
// is also know as sequential search

function linearSearch(arr, target){
  let n = arr.length;
  for(let i=0 ; i<n ; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,3,6,4,6,7,5], 6));






// Linear search on string can also be done
function linearSearchString(str, ch){
  let n = str.length;

  for(let i=0 ; i<n ; i++){
    if(str[i] === ch){
      return 1;
    }
  }
  return -1;
}

console.log(linearSearchString("word search", "d"));
console.log(linearSearchString("word search", "f"));


// Finding all of the user details with their name
let users = [
  {id: 1, name: "Anjlesh", city:"Pune", age: 22},
  {id: 2, name: "Raj", city:"Baner", age: 20},
  {id: 3, name: "Ram", city:"Pune", age: 22},
  {id: 4, name: "Ram", city:"Baner", age: 23},
  {id: 5, name: "Kumar", city:"Aundh", age:32},
] 

function findUserDataByName(users, name){
  for(let detail of users){
    if(detail.name === name){
      return detail;
    }
  }
  return null;
}

console.log(findUserDataByName(users, "Raj"));
console.log(findUserDataByName(users, "Ram")); // gives the first one to occur in the array (normal array traversal behaviour)
console.log(findUserDataByName(users, "Ravi"));



// Map => remembers the original insertion order 

//Map methods
// 1. set(key, value) => adds or updates an entry
// 2. get(key) => returns the value of the specified key
// 3. has(key) => checks if the map contains a key
// 4. delete(key) => Removes a key-value pair
// 5. clear() => Removes all the entries of map
// 6. size() => Returns the number of entries

// Some more map methods

// values() => prints all the values of the map
// keys() => prints all the keys of the map





// Set in JS => only unique values, doesn't allows duplicates

// Set methods
// 1. add(value) => adds value to the set
// 2. has() =>  returns true if the set has the specific value, false otherwise
// 3. delete() => deletes the specified element from the set
// 4. clear() => delete all entries from the set
// 5. size() => gives the size of set

let set = new Set();
set.add(10);
set.add(30);
set.add(20);
set.add(30);
console.log(set);
console.log(set.size);
console.log(set.has(30));
console.log(set.has(3));



