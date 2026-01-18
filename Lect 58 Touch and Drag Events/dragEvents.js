const target = document.querySelector("#target")
const draggableElement = document.querySelector("[draggable-'true']")

target.addEventListener("dragenter", (e)=>{
  console.log("Draggable event has entered");

})
