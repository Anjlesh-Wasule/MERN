export function hello() {
  console.log("Hello World");
}

export function increment() {
  counter++;
}

export function status() {
  log(counter);
}

function log(value) {
  console.log(value);
}

let counter = 1;

// export { counter, status, increment} these are all names exports
// there can be multiple named exports

// default export - there is only a single default export per module

export default counter;
