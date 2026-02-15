// Fake API
function getSearchResult(searchTerm){
  console.log("get Search results called");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, 2000);
  })
}


function debounce(fn, delay){
  let timer;

  return function(...args){
    console.log("debounced");

    clearTimeout(timer);

    timer = setTimeout(() => {
      console.log("call allowed");
      fn.apply(this, args);
    }, delay);
  } 
}



document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("#search");

  inputElement.addEventListener("input", debounce(event => {
    console.log(event.key, event.target.value);

    getSearchResult().then(() => {
      console.log("results came");
    })
  }, 800))
});





/*

======== Difference between debounce and throttle ========

Debounce:
- Executes function only after events stop for a specified time.
- Timer resets on every new event.
- Best for search input, auto-save, form validation.
- Focus: final result after user stops action.

Throttle:
- Executes function at most once every specified time interval.
- Ignores extra calls during the interval.
- Best for scroll, resize, mouse move.
- Focus: steady execution over time.

*/