let squareRootOf10 = Math.sqrt(100);
console.log(squareRootOf10);

let num = 9;
let isPrime = true;
let sqrt = Math.sqrt(num);
for(let i=2; i<=Math.floor(sqrt); i++){
  if(num%i == 0){
    isPrime = false;
    break;
  }
}

(isPrime) ? console.log(num,"is Prime") : console.log(num,"is NOT Prime");

a = 10;

for(let i=0; i<5; i++){
  let line = "";
  for(let space=0; space<i; space++){
    line += " ";
  }
  for(let star=0; star<5-i; star++){
    line += "*";
  }
  console.log(line);
}
