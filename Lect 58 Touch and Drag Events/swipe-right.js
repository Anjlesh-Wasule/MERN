const box = document.querySelector(".box");

let startX = 0;
box.addEventListener("touchstart", (e) => {
  // console.log(e);
  startX = e.touches[0].clientX;
});

box.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 30) {
    console.log("box has been swiped to the right");
  }
});
