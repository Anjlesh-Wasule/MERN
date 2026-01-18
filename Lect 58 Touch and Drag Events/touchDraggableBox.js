const box = document.querySelector(".box");

let dragable = false;
box.addEventListener("touchstart", () => {
  dragable = true;
});

document.addEventListener("touchend", () => {
  dragable = false;
  box.style.backgroundColor = `rgb(219, 196, 255)`;
});

document.addEventListener("touchmove", (e) => {
  if (dragable) {
    box.style.backgroundColor = "purple";
    box.style.left = `${e.touches[0].clientX}px`;
    box.style.top = `${e.touches[0].clientY}px`;
  }
});
