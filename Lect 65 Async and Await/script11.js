// // // // // function printPatt(n) {
// // // // //     for (let i = 1; i <= n; i++) {
// // // // //         let sum = 0;
// // // // //         let pattern = "";

// // // // //         for (let j = 1; j <= i; j++) {
// // // // //             pattern += (j + " ");
// // // // //             sum += j;
// // // // //         }
// // // // //         if (sum != 1) {
// // // // //             pattern += sum;
// // // // //         }
// // // // //       console.log(pattern);
// // // // //     }
// // // // // }

// // // // // printPatt(5);


// // // // let array = [1,5,6,7];

// // // // // console.log(array.splice(1,3)); // 2 3 4
// // // // // console.log(array.slice(1,3)); // 5 6 7
// // // // // console.log(array); 

// // // // for(let i=0 ; i<array.length ; i++){
// // // //   array.pop();
// // // // }

// // // // console.log(array);



// // // // console.log(5 == "5");
// // // // console.log(5 === "5");


// // // let obj1 = {
// // //   name: "anj",
// // //   age: 23
// // // }

// // // let obj2 = {
// // //   city: "Pune",
// // //   state: "Mh"
// // // }


// // // let combinedObj = {
// // //   ...obj1, ...obj2
// // // }

// // // console.log({com});


// // let arr = [5,5,5,5];

// // // finding second Largest
// // function findSecondLargest(arr){
// //   let first = -Infinity;
// //   let sec = -Infinity;

// //   for(let i=0 ; i<arr.length ; i++){
// //     if(arr[i] > first){ // we found the new first largest
// //       sec = first;
// //       first = arr[i];
// //     }
// //     else if(arr[i] != first && sec < arr[i]){ // current second is smaller than num, but smaller than first
// //       sec = arr[i];
// //     }
// //   }

// //   console.log(sec);
// // }


// // findSecondLargest(arr);



// function checkOddEven(n){
//   if(n&1){
//     console.log("Odd");
//   }
//   else{
//     console.log("Even");
//   }
// }

// checkOddEven(5);
// checkOddEven(4);
// checkOddEven(0);


