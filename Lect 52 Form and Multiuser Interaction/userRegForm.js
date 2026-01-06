// // const form = document.querySelector("form");
// // const submitBtn = document.querySelector("button");

// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// // });

// // form.addEventListener("input", ()=>{
// //   if(!form.checkValidity()){
// //     submitBtn.setAttribute("disabled");
// //   }else{
// //     submitBtn.removeAttribute("disabled");
// //   }
// // });

// const form = document.querySelector("form");
// const submitBtn = form.querySelector("button[type='submit']");

// form.addEventListener("change", () => {
//   let isValid = form.checkValidity();
//   if (!isValid) {
//     submitBtn.setAttribute("disabled", "");
//   } else {
//     submitBtn.removeAttribute("disabled");
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // handle valid submission here
//   const formData = new FormData(form);

//   let submittedValues = "";

//   for (let [key, value] of formData.entries()) {
//     submittedValues += `${key}: ${value}\n`;
//   }

//   alert(submittedValues);
//   form.reset();
// });


document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".container");
    let submit = document.querySelector("button[type='submit']")
    form.addEventListener("change", function () {
        const isValid = form.checkValidity();
        if (!isValid) {

            submit.setAttribute("disabled", "");
        } else {
            submit.removeAttribute("disabled")
        }
    })
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        let submittedValues = "";

        for (let [key, value] of formData.entries()) {
            submittedValues += `${key}:${value}\n`
        }

        alert(submittedValues);
        form.reset();
    })

})