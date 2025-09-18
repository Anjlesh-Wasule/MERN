function findGreater(a, b){
  return (a > b) ? a : b;
}
let ans = findGreater(10, 20);
console.log("Greater is:", ans);

function findMinimum(a, b){
  return (a < b) ? a : b;
}
console.log("Minimum is:", findMinimum(10, 20));

function sum(a=0, b=0, c=0){
  return a + b + c;
}

console.log("Sum of 2 numbers is:", sum(2, 10));
console.log("Sum of 3 numbers is:", sum(1, 2, 10));