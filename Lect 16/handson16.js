//  ? => Optional Chanining in object
// returns "undefined" if property you are trying to access is not present

let student = {
  name: "Anjlesh", 
  age: 22,
  gender: "Male",
  address: {
    city: "Pune",
    state: "Maharashtra"
  },
  toDelete: "This has to be deleted",
};

// Printing full Object
console.log(student);

// Printing specific property
console.log(student.name);  // or
console.log(student['name']);



console.log(student.address.city);

// console.log(student.address.addressline1); // undefined

// console.log(student.address.addressline1.landmark); // Cannot read properties of undefined error

// Handling the above error with optional chaining
console.log(student?.address?.addressline1?.landmark); // undefined


console.log("\n\n");
// Printing all the key-value pair using for ... in loop 
for(let key in student){
  console.log(key, ":", student[key]);
}




// Printing only keys using built-in method
console.log("\n\nKeys of student are:",Object.keys(student));




// Printing all the values using built-in method
console.log("\n\nKeys of student are:",Object.values(student));



// Deleting the property toDelete
delete student.toDelete;

// Functions inside an object
let vehicle1 = {
  name: "Fortuner",
  noOfSeats: 7,
  topSpeed: "180 km/h",
  currentSpeed: 0,
  
  isRunning: function(){
    if(this.currentSpeed > 0)
      console.log("Fortuner is Running");
    
    else console.log("Fortuner NOT running");
  },
}


vehicle1.isRunning();
vehicle1.currentSpeed = 12;
vehicle1.isRunning();

// For in loop is meant for looping over the keys of the object
// while for of loop iterates over the actual object in an array

// 🔑 Easy Trick to Remember:

// 🔹 "of" = elements of array (values)
// 🔸 "in" = keys in object (property names)

// ✅ Example:
// for (let x of arr) → x = value (e.g., {name: "John"})

// for (let i in arr) → i = "0", "1", ... (string index)


// Real Example:
// [ 
//    {"name": "John", "id": 123, "marks": 98}, 
//    {"name": "Baba", "id": 101, "marks": 23}, 
//    {"name": "yaga", "id": 200, "marks": 45}, 
//    {"name": "Wick", "id": 115, "marks": 75} 
// ]
// for (let obj of Data) {
//   // obj is the actual element in the array
//   if (obj.marks > 50) {
//     ans.push(obj);
//   }
// }



// for (let index in Data) {
//   // index is a string like "0", "1", ...
//   let obj = Data[index];
//   if (obj.marks > 50) {
//     ans.push(obj);
//   }
// }
