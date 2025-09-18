const condition = Infinity;
if(condition){
  console.log(condition, "is true");
}else{
  console.log(condition,"is false");
}


// Factorial of a number using loop
let n = 5, fact = 1;
for(let i=1 ; i<=n; i++){
  fact *= i;
}

console.log(fact);

// Check is Prime or not
let num = 15;
let isPrime = true;
for(let i=2; i<n; i++){
  if(num%i == 0){
    isPrime = false;
  }
}
if(isPrime) {
  console.log(num,"is Prime");
}else{
  console.log(num,"is NOT Prime");
}

// Print the nos from 100 to 200 and stop when a number is divisible by 17 comes
console.log("stop when a number is divisible by 17 comes");
for(let i=100 ; i<=200 ; i++){
  if(i%17 === 0){
    break;
  }
  console.log(i);
}


// Print the square of nos from 1 to 100 except the numbers divisible by 17
// for(let i=1 ; i<=100; i++){
//   if(i%17 == 0){
//     continue;
//   }
//   console.log(i*i);
// }


// Print all odd numbers from 1 to 200 that are divisible by 5
console.log("Print all odd numbers from 1 to 200 that are divisible by 5");
for(let i=1 ; i<=200 ; i++){
  if(i%5!=0 || i%2==0){
    continue;
  }
  console.log(i);
}

// Print first 10 odd numbers from 1 to 200 that are divisible by 5
let count = 0;
console.log("Print first 10 odd numbers from 1 to 200 that are divisible by 5");

for(let i=1 ; i<=200 ; i++){
  if(i%5==0 && i%2!=0){
    console.log(i);
    count++;
    if(count == 10) break;
  }
}
 
// Write a program to print 10 lines of (10 "*" in one line)
console.log("print 10 lines of (10 '*' in one line)")
for(let i=1 ; i<=10 ; i++){
  let str = "";
  for(let j=1 ; j<=10 ; j++){
    str += "*";
  }
  console.log(str);
}


let N = 6;
for(let i=0 ; i<N; i++){
  let patt = "";
  for(let j=1 ; j<=N ; j++){
    patt += j + " ";
  }
  console.log(patt);
}


/* 
// H.W
*****
****
***
**
*

1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5 
1 2 3 4 5 6 */ 

// H.W +++>>>
console.log("Pattern printing");
for(let i=0 ; i<5 ; i++){
  let patt = "";
  for(let j=5 ; j>i ; j--){
    patt += "*";
  }
  console.log(patt);
}


console.log("Pattern printing 123");
for(let i=1 ; i<=N ; i++){
  let line = "";
  for(let j=1 ; j<=i; j++){
    line += j + " ";
  }
  console.log(line);
}


// DO-WHILE LOOP
// do{
//   console.log("Hi, I'm do-while loop!!");
// }while(false);

// const resp = prompt("Do you want to continue??");
// console.log({resp});