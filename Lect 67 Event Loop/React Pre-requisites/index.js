// import {add as addition} from "./math.js"
import x, * as math from "./math.js";    // all exported members wil become available on math object
// here  x is default export from math.js i.e subtraction
import {log} from './helper.js'


// const sum = addition(2,4);
const sum = math.add(2, 4);

const diff =  x(4, 3);
log(diff);

function add(a, b){
  return a + b.toString();
}

const addi = add("hello", "world");
log(addi);

log(sum);

