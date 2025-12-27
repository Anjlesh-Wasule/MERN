/* 
Functions as FIRST CLASS CITIZEN
    => functions can be returned from another function
    => function can be passed as an argument to another function
    => function can be assigned to a variable

*/

// 1. Functions can be returned from another function

function outerFunction(){
  let smeVal = "xyz";
  
  return function innerFunction(){
    return someVal;
  }
}



// 2. Function can be passed as an argument to another function
function greeter(composer, firstName){
  // do something....

  composer();
}

function displayName(){
  console.log("DisplayName called\n");
}

greeter(displayName, "Anjlesh");




// 3. Function can be assigned to a variable
function add(x,y){
  return x+y;
}

let addition = add;
console.log(addition(3,5));








// CALLBACKS

// document.addEventListener("click", function(){
//   // this is a callback function
// });

// There are two types of callbacks
// 1. Synchronous
// 2. Asynchronous


setTimeout(() => {
  console.log("This function is called after 2 secs");
}, 2000); // Asynchronous callback







// Higher order function is a type of function that accepts a function as a parameter...
function greetMe(greetingMaker, firstName, lastName){
  let greeting = greetingMaker();

  return `${greeting}, ${firstName} ${lastName}`;
}

function hindiGreeter(){
  return "Namaste";
}

function spanishGreeter(){
  return "Hola";
}

function englishGreeter(){
  return "Hello";
}

console.log(greetMe(spanishGreeter, "Anjlesh", "Wasule"));
console.log(greetMe(englishGreeter, "Anjlesh", "Wasule"));
console.log(greetMe(hindiGreeter, "Anjlesh", "Wasule"));

// englishGreeter, hindiGreeter, spanishGreeter all are callbacks










// -----------------**** Closures ****-----------------
// It is an inner function that remembers and has access to variables from its outer function's scope, 
// even after the outer function has finished executing. 
function add(x){

  return function(y){
    console.log("\ninner function called with value from outer function");
    return x+y;
  }

}

let add5 = add(5);

console.log(add5(10));
console.log(add5(7));




// Que: Create a "greet me" function which accepts "lang" as argument and returns the greeting based on that, using closures
function greetMeWithLang(lang){
  let greet;
  if(lang == "HI") greet = "Namaste!";
  else if(lang == "EN") greet = "Hello!";
  else if (lang == "ES") greet = "Hola!";
  else greet = "Wassup!"

  return function(firstName, lastName){
    return `${greet}, ${firstName} ${lastName}`;
  }

}

let engGreeting = greetMeWithLang("EN");
console.log(engGreeting("Anjlesh", "Wasule"));

let spanGreeting = greetMeWithLang("ES");
console.log(spanGreeting("Anjlesh", "Wasule"));

let hinGreeting = greetMeWithLang("HI");
console.log(hinGreeting("Anjlesh", "Wasule"));

let normalGreeting = greetMeWithLang();
console.log(normalGreeting("Anjlesh", "Wasule"));


// Some interesting way
console.log( greetMeWithLang("HI")("Kshitij", "Wasule"));






// Some more example of closure
function sum(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}

console.log(sum(10)(20)(30));









// BUILT IN JS higher order functions
// FILTERS, REDUCE and MAP


// Map
// map function transforms to a different output
let arr = ['1', '2', '3', '4', '5'];
let mappedNumbers = arr.map((val, index, arr) => {
  // console.log({val, index, arr});
  return Number(val);
}) 

console.log(arr);
console.log(mappedNumbers);





// Filters
console.log(mappedNumbers.filter((val, index)=>{
  // if(val%2 == 0) return val; // method 1

  // method 2
  return val%2 === 0;
})
);


// some real world usecase
let personList = [
  {
    name: "Anjlesh",
    age: "23"
  },

  {
    name: "Raj",
    age: "33"
  },

  {
    name: "Sam",
    age: "28"
  },
  
];


console.log("Persons below age 30" ,
personList.filter( (person) => {
  return person.age < 30;
}));


// reduce(previous value, current value, current index)
//                                          |-> optional

console.log(
  mappedNumbers.reduce((prev, curr) => {
    console.log({ prev, curr });
    return prev + curr;
  }, 3)
);


// real world shopping cart example
let shoppingCart = [
  {
    title: "item1",
    price: 10
  },

  {
    title: "item2",
    price: 20
  },

  {
    title: "item3",
    price: 30
  },
];


let total = shoppingCart.reduce( (prev, item) => {return prev + item.price}, 0);
console.log(total);