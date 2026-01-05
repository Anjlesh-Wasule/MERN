// classList, classlist.add, .remove, .toggle, .contains, .replace

// Events in js
// // method 1 using the onclick in HTML and defining the fucnction in js file
// function handleClick(){
//   alert("Button was clicked");
// }

// // Method 2
// const button = document.querySelector("button");

// button.addEventListener("click", ()=>{
//   alert("Button Clicked")
// });

// // Method 3
// button.onclick = handleClick();

document.addEventListener("mousemove", (e) => {
  // console.log("Mouse moved!!");
  // console.log(e);
});

// getting the input
const inp = document.querySelector("input");
inp.addEventListener("keypress", (e) => {
  console.log(e);
});

const start = document.querySelector("#start");
const stopp = document.querySelector("#stop");

// function mouseMove() {                               // Wrong code
//   document.addEventListener("mousemove", () => {
//     console.log("Mouse moved");
//   });
// }

// start.addEventListener("click", mouseMove);

// stopp.addEventListener("click", () => {
//   document.removeEventListener("mousemove", mouseMove );
// });



function mouseMove() {
  console.log("Mouse moved");
}

start.addEventListener("click", () => {
  document.addEventListener("mousemove", mouseMove);
});

stopp.addEventListener("click", () => {
  console.log("Event removed");
  document.removeEventListener("mousemove", mouseMove);
});
