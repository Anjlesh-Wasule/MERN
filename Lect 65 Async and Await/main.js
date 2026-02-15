function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ user: "Anjlesh", age: 23 });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

fetchUser(1).then(console.log).catch(console.error);

// Using Async and await
async function getUser() {
  try {
    const user = await fetchUser(1);
    const user2 = await fetchUser(0); // 0 can be used for simulating rejected case
    console.log(user);
    console.log(user2); // "user not found"
  } catch (err) {
    console.error(err);
    throw err; // if we don't write this, the catch block won't show error "Some fetching error", plus it will be treated as return with void promise i.e resolve()

    // return err; -> means something is getting resolved, while throw means rejection, always use throw inside the catch block to indicate rejection
    // it is equivalent to resolve(err), so it will go inside the then block
  }
  finally{
    console.log("finally called");
  }
}

function someFunc() {
  console.log("Some fucn called");
}

// getUser(); // this returns a promise
// someFunc(); // this will execute before getUser

getUser()
  .then(() => someFunc())
  .catch((err) => console.log("Some fetching error")); // forcefully executing someFunc() after getUsers()
