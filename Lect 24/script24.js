// Recursion => a function will call itself repeadly until it reaches a base condition
//  main() => abc() => abc() => abc() .... base case => stop



// Que: Print numbers from N to 1
function printNTo1(n = 10){
  
  // base case
  if(n == 0) return;

  // recursive call
  console.log(n);
  printNTo1(n-1);

}
// console.log("Printing numbers from N to 1");
// printNTo1();



// Que: print the numbers from 1 to N
function print_1ToN(n){
 // base case
  if(n == 0) return;

  // recursive call
  print_1ToN(n-1); 
  console.log(n);
}

// console.log("Printing numbers from 1 to N");
// print_1ToN(10);




// Que: Print "Hello World" 5 times
function print5HelloWorld(n=0){
  if(n == 5) return;
  console.log("Hello World");
  n+=1;
  print5HelloWorld(n);
}
// print5HelloWorld();


// Que: First print 1 to N followed by N to 1
// ===> this is the problem of *** TWO WAY PATH ***

function printAlternate1ToN(n, curr=1){
  // base case
  if(curr > n) return;

  console.log(curr);
  printAlternate1ToN(n, curr+1);
  console.log(curr);
}

// printAlternate1ToN(5);


function printNto1toN(n){
  // base case
  if(n == 0) return;

  console.log(n);
  printNto1toN(n-1);
  console.log(n);
}

// printNto1toN(5);



// Que: Print sum of first N natural numbers
function sumOfNNaturalNums(n){
  // base case
  if(n == 1) return 1;

  // recursive call
  return n + sumOfNNaturalNums(n-1);
}
// console.log(sumOfNNaturalNums(10));




// Que: Find power of a number 
function pow(x,y){
  if(y == 1) return x;

  return x * pow(x,y-1);
}

// console.log(pow(2,3));





// Que: Reverse a string
function revStringUsingRecursion(str, i, res){
  if(i == str.length) return;

  revStringUsingRecursion(str, i + 1, res);
  res.push(str[i]);
}

function revStringUsingRecursionSirMethod(str){
  if(str == "") return "";

  return revStringUsingRecursionSirMethod(str.slice(1)) + str[0];
}

// let res = [];
// revStringUsingRecursion("Hello", 0, res);
// console.log(res.join(''));

// console.log(revStringUsingRecursionSirMethod("Hello"));





// Que: Find the factorial of a number using recursion
function factorial(n=5){
  if(n==1) return 1;

  return n * factorial(n-1);
}

// console.log(factorial(5));






// Que: Print the fibonacci Series till n
// if n == 6 then, output: 0,1,1,2,3,5 
function fibonacciSeries(n){
  if(n == 1) return 0;
  
  if(n == 2) return 1;

  return fibonacciSeries(n-1) + fibonacciSeries(n-2);
}

console.log(fibonacciSeries(6));

