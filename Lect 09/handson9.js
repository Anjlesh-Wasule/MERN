const condition = Infinity;
if(condition){
  console.log(condition, "is true");
}else{
  console.log(condition,"is false");
}

let n = 5, fact = 1;
for(let i=1 ; i<=n; i++){
  fact *= i;
}
console.log(fact);

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

console.log("stop when a number is divisible by 17 comes");
for(let i=100 ; i<=200 ; i++){
  if(i%17 === 0){
    break;
  }
  console.log(i);
}

for(let i=1 ; i<=100; i++){
  if(i%17 == 0){
    continue;
  }
  console.log(i*i);
}

console.log("Print all odd numbers from 1 to 200 that are divisible by 5");
for(let i=1 ; i<=200 ; i++){
  if(i%5!=0 || i%2==0){
    continue;
  }
  console.log(i);
}

let count = 0;
console.log("Print first 10 odd numbers from 1 to 200 that are divisible by 5");
for(let i=1 ; i<=200 ; i++){
  if(i%5==0 && i%2!=0){
    console.log(i);
    count++;
    if(count == 10) break;
  }
}

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
