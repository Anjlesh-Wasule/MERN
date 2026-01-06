const formElement = document.querySelector("#userInfo");

formElement.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(e);

  // const firstName = document.querySelector("#firstName");
  // const lastName = document.querySelector("#lastName");

  // alert(`The name is ${firstName.value} ${lastName.value}`)

  // FormData - pass it the formElement
  let formData = new FormData(formElement);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  //  alert(`The name is ${firstName} ${lastName}`)

  //  console.log(formData.values());

  for (let value of formData.values()){
    console.log(value);
  }


  for (let key of formData.keys()){
    console.log(key);
  }

  for (let [key, value] of formData.entries()){
    console.log({key, value});
  }

  console.log("Selected using query selector");
  

});