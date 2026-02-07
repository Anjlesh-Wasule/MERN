const targetEle = document.querySelector('.target');
const startEle = document.querySelector('.start');
const draggablePara = document.querySelector('.draggablePara')


// draggablePara.addEventListener("dragstart", (e)=>{
//   console.log("Dragging started");
// });

// targetEle.addEventListener("dragover", ()=>{
//   console.log("draging over the target");
// });

// draggablePara.addEventListener("dragend", ()=>{
//   // targetEle.append(draggablePara);
// });

targetEle.addEventListener("drop", ()=>{
  targetEle.append(draggablePara);
})



const fileInp = document.querySelector(".fileInp");

fileInp.addEventListener("dragover", (e)=>{
  e.preventDefault();
  e.target.style.borderStyle = "dashed";
  e.target.style.border = "2px solid white";
});

fileInp.addEventListener("dragleave", (e)=>{
  e.target.style.borderStyle = "none"

})

fileInp.addEventListener("drop", (e)=>{
  e.preventDefault();
  fileInp.files = e.dataTransfer.files;
  e.target.style.borderStyle = "none";

})
