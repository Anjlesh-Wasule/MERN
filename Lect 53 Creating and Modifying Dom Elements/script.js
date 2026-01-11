const section = document.createElement("section");
const para = document.createElement("p");

para.id = "title";
para.textContent = "This is the para text"

// use element.append to append more than one element to parent
const link = document.createElement("a");
link.href = "https://google.com";
link.textContent = "Visit Google"

const anotherPara = document.createElement("p");
anotherPara.innerText = "Additional Info Para"

section.appendChild(para);

section.append(anotherPara, link," text appended from .append");

document.body.appendChild(section);

// section.insertBefore(thisNode, beforeThisOne)
// section.prepend(multiple nodes here), will always add elements on top on the parent



// Fun Activity -> Remove top elements from the tree
const removeBtn = document.createElement("button");
removeBtn.id = "removeBtn";
removeBtn.innerText = "Remove top Element";

removeBtn.addEventListener("click", ()=>{
  if(section.firstChild && section.firstChild.id !== "removeBtn"){
    section.firstChild.remove();
  }else{
    alert("All elements are removed!");
  }
});

section.appendChild(removeBtn);
