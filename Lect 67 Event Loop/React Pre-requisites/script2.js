// function greet(){
//   hello();
//   console.log("Wasssupp!");
// }

// greet();


// // comparison between default vs named exports

// // Default                                      Named

// // - one per module                             multiple
// // - any name can be given while importing      has to be used with the exported name
// // - value at the time of import                live/latest value


import xzy from "./main.js";
import { hello, increment, status } from "./main.js";
function greet() {
    hello();
    console.log("wasssup!!!")
}

greet();

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    // modification is not allowed directly
    // button.addEventListener("click", () => {
    //     counter++;
    // });

    // button you can call functionality that will do it

    button.addEventListener("click", increment);

    document.querySelector("#status").addEventListener("click", () => {
        // named exports are readonly - they will return the latest/live value
        // default export variables are not live
        console.log(xzy);
        // log - not accessible since it is not exported
        status();
    })
})




// (() => {})();