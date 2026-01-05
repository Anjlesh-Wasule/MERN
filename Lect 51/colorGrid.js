const container = document.querySelector(".container");

function randomNum() {
  return Math.floor(Math.random() * 256);
}

for (let i = 0; i < 800; i++) {
  const square = document.createElement("div");
  square.classList.add("box");

  square.addEventListener("mouseenter", () => {
    const color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    square.style.backgroundColor = color;

    setTimeout(() => {
      square.style.backgroundColor = "black";
    }, 1550);
  });

  container.appendChild(square);
}
