// Different ways to declare strings
let str1 = "Hi, I'm Anjlesh";   // using double quotes
let str2 = 'Hi, Im Anjlesh';    // using single quotes
let str3 = `Hi, I'm Anjlesh`;   // using template literals (backticks)

console.log(typeof str1);       // string
console.log(typeof str2);       // string
console.log(typeof str3);       // string

// Strings are immutable, this won't change the character
str3[5] = '7';
console.log(str3);              // output will still be the same original string

// Que: Function to count the number of words in a sentence
let sentence = "Hi how are you doing";
function countWords(sentence){
  let spaceCount = 0;
  for(let i=0 ; i<sentence.length ; i++){
    if(sentence[i] == ' '){
      spaceCount++;
    }
  }
  return spaceCount + 1;  // Number of words = spaces + 1 // +1 for last word
}
console.log(countWords(sentence));  











// ++++++++++++++++++++++++ STRING METHODS ++++++++++++++++++++++++

// includes() - checks if a character or substring is present
console.log("balloon".includes('o'));     // true
console.log("balloon".includes('all'));   // true
console.log("balloon".includes('Loon'));  // case-sensitive

// replace() - replaces the first occurrence of a character/string
console.log("shoes".replace("s", "E"));   // "Ehoes"

// replaceAll() - replaces all occurrences
console.log("school".replaceAll('o', "U"));  // "schUUl"

// trim() - removes whitespace from both ends of the string
console.log("            trimed    string       ".trim());  // "trimed    string"

// substring(start, end) - extracts substring (end index excluded)
console.log("kshitij".substring(2));        // "hitij"
console.log("kshitij".substring(2,5));      // "hit"
console.log("kshitij".substring(-2));       // treated as 0 => full string
console.log("kshitij".substring(-2,5));     // "kshit"
console.log("kshitij".substring(5,2));      // swaps 5 and 2 => "hit"
console.log("kshitij".substring(5,-3));     // treats -3 as 0 => "kshit"




// slice(start, end) - like substring, but negative values are allowed
// negative value means from last
console.log();
console.log("anjlesh".slice(2));            // "jlesh"
console.log("anjlesh".slice(-2));           // "sh"
console.log("anjlesh".slice(4,-2));         // "le"
console.log("anjlesh".slice(-6,-2));        // "jle"




// repeat() - repeats the string given number of times
console.log("abcd ".repeat(3));             // "abcd abcd abcd "



console.log("abc".__proto__);   // Shows String prototype methods



// charAt(index) - returns character at given index
console.log("vscode".charAt(2));            // "c"



// indexOf() - finds first index of a character or substring
console.log("stringMethods".indexOf("r"));          // 3
console.log("stringMethodsring".indexOf("ring"));   // 6
console.log("stringMethodsring".indexOf("ring", 7)); // 16



// toLowerCase() - converts entire string to lowercase
console.log("AnJlESH".toLowerCase());       // "anjlesh"



// toUpperCase() - converts entire string to uppercase
console.log("AnJlESH".toUpperCase());       // "ANJLESH"



function print3LenSubStr(str){
  for(let i=0 ; i+2<str.length ; i++){
    console.log(str.slice(i, i+3)); // slice takes i, i+1, i+2 => 3 characters
  }
}
print3LenSubStr("builder"); 