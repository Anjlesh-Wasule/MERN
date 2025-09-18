// console.log(Math.ceil(7/2));
// console.log((7/6).toFixed(20));

/* Printing the kaju-Katli \
   


   *
  ***
 *****
*******
 *****
  ***
   *


*/
/* 
| Row | Spaces | Stars |          |
| --- | ------ | ----- | -------- |
| 1   | 3      | 1     |          |
| 2   | 2      | 3     |          |
| 3   | 1      | 5     |          |
| 4   | 0      | 7     | ← middle |
| 5   | 1      | 5     |          |
| 6   | 2      | 3     |          |
| 7   | 3      | 1     |          |

*/

// Break the pattern in two parts
// top half including the middle row and bottom half after the middle row

function printPattern(n = 7) {
  let middle = Math.ceil(n / 2);

  // Top Half
  for (let i = 1; i <= middle; i++) {
    // rows from 1 -> 4
    let line = "";

    // spaces in ith row
    for (let j = 1; j <= middle - i; j++) {
      // 3 spaces, 2 spaces, 1 space
      line += "  ";
    }

    // stars in the ith row
    for (let stars = 1; stars < 2 * i; stars++) {
      // 1, 3, 5, 7
      line += "* ";
    }

    console.log(line);
  }

  // Bottom half
  for (let i = middle - 1; i > 0; i--) {
    // rows 5, 6, 7 (3->2->1)
    let line = "";

    // spaces
    for (let j = 1; j <= middle - i; j++) {
      line += "  ";
    }

    // stars
    for (let star = 1; star <= 2 * i - 1; star++) {
      line += "* ";
    }

    console.log(line);
  }
}

printPattern(7);

function printHollowPattern(n = 7) {
  let middle = Math.ceil(n / 2);

  // Top Half
  for (let i = 1; i <= middle; i++) {
    // rows from 1 -> 4
    let line = "";

    // spaces in ith row
    for (let j = 1; j <= middle - i; j++) {
      // 3 spaces, 2 spaces, 1 space
      line += " ";
    }

    // stars in the ith row
    for (let stars = 1; stars < 2 * i; stars++) {
      // 1, 3, 5, 7
      line += "*";
    }

    console.log(line);
  }

  // Bottom half
  for (let i = middle - 1; i > 0; i--) {
    // rows 5, 6, 7 (3->2->1)
    let line = "";

    // spaces
    for (let j = 1; j <= middle - i; j++) {
      line += " ";
    }

    // stars
    for (let star = 1; star <= 2 * i - 1; star++) {
      line += "*";
    }

    console.log(line);
  }
}


/* 
======= Read about =======
1. Slice
2. Splice
3. Concat
4. for in loop
5. for of loop

*/