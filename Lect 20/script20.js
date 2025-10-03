// Time Complexity => Approximate time an algorithm will take to execute


// Creating an array of size n
let n = 20;
let arr = new Array(n);



for(let i=0 ; i<n ; i+=2){ // T.C => O(n/2)
  console.log(i);
}

// total T.C => O(n/2 * n) => O(n^2)
for (let i = 0; i < n; i+=2) { // T.C => O(n/2)
  for(let j=0 ; j<n ; j++){    // T.C => O(n)
    console.log(j); 
  }  
}
// for 1 value of i, j wil run N times
// so, for k values of i,j will run (k.n) times in total.




// O(1) => constant T.C
// O(n) => linear T.C
// O(log N) => logarithmic T.C
// O(N^2) => Quadratic T.C
// O(N^m) => exponential T.C
// No famous names => O(N*log N), O(sqrt(n))





// let count = 3;
// while(n>0) {
// n -= count     // T.C => n/3
// };




