const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const again = document.querySelector(".again");
const input = document.querySelector("input");

function randomNumber(){
  return Math.floor(1 + Math.random()*6);
}

roll.addEventListener("click", ()=>{
  const userVal = Number(input.value);
  let rolledValue = randomNumber();

  dice.innerText = rolledValue;
  
  if(rolledValue == userVal){
    again.style.display = 'block';
    roll.style.display = 'none';
  }
  
  
});

again.addEventListener("click", ()=>{
  dice.innerText = "";
  again.style.display = 'none';
  roll.style.display = 'block';
  input.value = "";
})
