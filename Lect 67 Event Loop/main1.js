
// =================++++++++ EVENT LOOP ++++++++=================

function first(){
  console.log("a");
}

function second(){
  console.log("b");
  
}

function third(){
  setTimeout(()=> {
    console.log("c");
  }, 0)
}

function fourth(){
  Promise.resolve().then(()=> {
    console.log("d");
  })
}

function fifth(){
  Promise.resolve().then(()=> {
    console.log("e");
  })
}


function sixth(){
  setTimeout(() => {
    console.log("f");
  }, 0);
}

third();  // c
sixth();  // f
fifth();  // e  
fourth(); // d
second(); // b
first();  // a

// task queue / macrotask queue
// => slight lesser priority in the execution
// => setTimeout, setInterval, I/O tasks, UI rendering are put in this queue

// microtask queue
// => higher priority than macrotasks
// => Promises, await, queueMicrotask, MutationObserver are put in this queue



// Starvation
function infiniteFn(){
  console.log("infinte function called");
  Promise.resolve().then(infiniteFn); // infinite promise creation
}

function timer(){
  setTimeout(() => {
    console.log("will never be called"); // this will never be called/ outputed on console
  }, 0);
}

// event Loop monitors callstack, microtask queue and task queue


// queueMicrotask(()=>{             // functions given here will be added to microtask queue
// })