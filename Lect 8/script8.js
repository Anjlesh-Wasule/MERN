// console.log("Hi !!")
// console.log("Hi !!")
// console.log("Hi !!")
// console.log("Hi !!")
// console.log("Hi !!")
// console.log("Hi !!")


/*
Issuses: 
- too much work for developer  
- chances of error
- undable to count the number of repetition
- too much work to update "Hi" to "Hii"  


To solve these issues we use loops
*/ 

// let count = 10;
// while(count > 0){
//   console.log("Hi");
//   count--;
// }

// Exercise: Print the counting from 1 to 10
let count = 1;
while(count <= 10){
  console.log(count);
  count++;
}
// T.C => O(10);


// Print all even numbners till 25
console.log("Printing even till 25");
let even = 2;
while(even < 25){
  console.log(even);
  even += 2;  
}
// T.C => O(12);

// Print countdown from 10 to 1
console.log("Countdown from 10 to 1 ");
let countdown = 10;
while(countdown >= 1){
  console.log(countdown--);
}
// T.C => O(10);


// FOR LOOP
console.log("Printing using the for loop:");
for(let count = 1; count <= 10; count++){
  console.log(count);
}

// T.C => O(10);

// Print multiples of 3 only, upto 50
console.log("Printing multiples of 3 upto 50");
for(let num = 3 ; num<50; num+=3){
  console.log(num);
}
// T.C => O(16);


// Print the square of each number from 20 to 35;
// let n = 35;
// for(let i = 20; i<=n; i++){
//   console.log(i*i);
// }
// // T.C => O(16);

// Sir's way of doing the problem:
n = 15;
let start = 20;

for(let i=start ; i<=start+n ; i++){
  console.log(i*i);
}
// T.C => O(n) => [(start +n) - start]

let num = 5;
for(let i=1; i<=10; i++){
  console.log(num + " x " + i + " = " + (num*i));
}

// Printing the sum of first 100 nums;
let sum=0, n=100;
for(let i=1; i<=n; i++){
  sum += i;
}
console.log(sum);


const n1 = false && 5;
const n2 = n1 == false && 34;
const n3 = n2 && "67";
const n4 = true && n2 == 34 && 45 && n1 == false;

const n5 = (n1 == false && n2 == 34) || (n3 == false && n4 == true);
console.log({n1, n2, n3, n4, n5});
