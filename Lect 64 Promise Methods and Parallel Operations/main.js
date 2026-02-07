function fetchComments(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comments");
    }, delay);
  });
}

function fetchUsers(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Users");
    }, delay);
  });
}

function fetchPosts(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts");
    }, delay);
  });
}

function request4() {
  // First argument is always resolve, second is reject
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      reject("Error Due to Timeout"); 
    }, 1000);
  });
}

Promise.resolve(10).then(console.log);
Promise.reject("test rejection").catch(console.error);

const startTime = performance.now();

fetchPosts(1000)
  .then(() => fetchComments(1000))
  .then(() => fetchUsers(1000))
  .finally(() => {
    const endTime = performance.now();
    console.log(".then all time: ", endTime - startTime);
  }); // takes 3 seconds




// Promise all -> will resolve only when all promises are fulfilled
//                will get rejected if any one promise is rejected
//                when resolved, the result will contain result for each promise in any array



// Promise any -> will resolve with the first promise that is resolved
//                will reject when all of the promises are rejected

const promiseAllTime = performance.now();
Promise.all([fetchComments(), fetchUsers(), fetchPosts()]).finally(() => {
  const endTime = performance.now();
  console.log("Promise all time: ", endTime - promiseAllTime);
});


//                                                         ⬇ rejective promise
Promise.any([fetchComments(), fetchUsers(), fetchPosts(), request4(1000)])
  .then(console.log)
  .catch(console.error)


Promise.any([request4(1000)])
  .then(console.log)
  .catch(console.error)



console.log("Calling Promise.allSettled");
Promise.allSettled([fetchComments(), fetchUsers(), fetchPosts(), request4(1000)]).then(console.log);



// Promise.race
Promise.race([fetchComments(), fetchUsers()])
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise.race called"))



