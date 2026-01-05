const circle = document.querySelector(".circle");

function moveCircle(e){
  // console.log(e);
  let currX = e.clientX;
  let currY = e.clientY;

  // console.log(currX, currY);  

  circle.style.top = `${currY - 40}px`;
  circle.style.left = `${currX - 40}px`;

}

document.addEventListener("mousemove", moveCircle);





const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")

const counter = document.getElementById("count");

let count = Number(counter.innerText);
console.log(count);

plus.addEventListener("click", ()=>{
  count += 1;
  counter.innerText = count;

});
minus.addEventListener("click", ()=>{
  count -= 1;
  if(count < 0) {
    count = 0;
    counter.innerText = "Can't go lower than 0"
  }
  else counter.innerText = count;
});









