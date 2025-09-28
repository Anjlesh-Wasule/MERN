// Revised Boundary Traversal Question, Transpose of matrix





// +++++++++++++++++++++++++========  STRINGS  ========+++++++++++++++++++++++++
let str1 = "Hi, I'm Anjlesh";
let str2 = 'Hi, Im Anjlesh';
let str3 = `Hi, I'm Anjlesh`; 

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3); // all are strings

str3[5] = '7'; // can't change
console.log(str3);


let sentence = "Hi how are you doing";
function countWords(sentence){
  let spaceCount = 0;
  for(let i=0 ; i<sentence.length ; i++){
    if(sentence[i] == ' '){
      spaceCount++;
    }
  }
  return spaceCount + 1;
}

console.log(countWords(sentence));









// +++++++++++++++++++++++++========  METHODS IN STRINGS  ========+++++++++++++++++++++++++


// includes()
console.log("balloon".includes('o'));
console.log("balloon".includes('all')); // can also search for an entire string
console.log("balloon".includes('Loon')); // false



// replace()
console.log("shoes".replace("s", "E")); // doesn't change the original strings (strings are immutable);




// replaceAll()
console.log("school".replaceAll('o', "U"));


// trim()
console.log("            trimed    string       ".trim());


// substring()
console.log("kshitij".substring(2));
console.log("kshitij".substring(2,5)); // doesn't include 5th index
console.log("kshitij".substring(-2)); // treats negative number as 0
console.log("kshitij".substring(-2,5)); // 0 to 5
console.log("kshitij".substring(5,2)); // if starting is grater than end then swap starting and ending => (2,5)
console.log("kshitij".substring(5,-3)); // result same as 0,5




// slice() -> almost same as substring method, but only differes when the range is negative
console.log();
console.log("anjlesh".slice(2));
console.log("anjlesh".slice(-2)); // gives two characters from the end
console.log("anjlesh".slice(4,-2)); // start at 4th index and go to last 2 characters
console.log("anjlesh".slice(-6,-2)); // start at last 6th index and go to last 2 characters




// repeat()
console.log("abcd ".repeat(3)); // repeatedly print the output 3 times in single line

console.log("abc".__proto__); // consoles the wrapper object details





// charAt()
console.log("vscode".charAt(2));



// indexOf()
console.log("stringMethods".indexOf("r"));
console.log("stringMethodsring".indexOf("ring"));
console.log("stringMethodsring".indexOf("ring", 7)); // search "ring" after 7th index



// toLowerCase()
console.log("AnJlESH".toLowerCase());




// toUpperCase()
console.log("AnJlESH".toUpperCase());


// Que: print all 3 len substrings
function print3LenSubStr(str){
  for(let i=0 ; i+2<str.length ; i++){
    console.log(str.slice(i, i+3));
  }
}
print3LenSubStr("wilder");