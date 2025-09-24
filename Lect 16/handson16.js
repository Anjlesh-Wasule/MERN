//  ? => Optional Chanining in object
// returns "undefined" if property you are trying to access is not present

let student = {
  name: "Anjlesh", 
  age: 22,
  gender: "Male",
  address: {
    city: "Pune",
    state: "Maharashtra"
  }
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