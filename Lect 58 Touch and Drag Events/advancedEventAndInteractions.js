// keyboard related events

const input = document.querySelector("#name");

input.addEventListener("keydown", (e) => {
  console.log("Key is pressed down....");

  if (e.ctrlKey && e.key == "a") {
    console.log(
      "%c  CTRL+K was pressed",
      "background: #02681d; color: #55d1da; padding: 5px; font-weight: bold;"
    );
  }
});

input.addEventListener("keypress", (e) => {
  console.log(
    "%c Key is fully pressed",
    "background: #020268; color: #bada55; padding: 5px; font-weight: bold;"
  );
});

input.addEventListener("keyup", (e) => {
  console.log("Key is up after after...");
});

// console.group("HEllow", "How are you\n this is a test\n group")

// When mouse comes over the box console.log("Mouse is on the box")

const box = document.querySelector(".box");

// box.addEventListener("mouseover", (e) => {
//   console.log("Mouse is on the box");
// });

// box.addEventListener("mouseleave", (e) => {
//   console.log("Mouse is outside the box");
// });

// document.addEventListener("mouseover", (e) => {
//   console.log(e);
// });

let dragable = false;
box.addEventListener("mousedown", () => {
  dragable = true;
});

document.addEventListener("mouseup", () => {
  dragable = false;
  box.style.backgroundColor = "bisque";
});


box.addEventListener("touchmove", () => {
  dragable = true;
});

document.addEventListener("touchend", () => {
  dragable = false;
  box.style.backgroundColor = "bisque";
});

document.addEventListener("mousemove", (e) => {
  if (dragable) {
    box.style.backgroundColor = "orange";
    box.style.left = `${e.clientX}px`;
    box.style.top = `${e.clientY}px`;
  }
});
