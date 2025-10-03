// Testing edge cases of string methods
console.log("anjlesh".substring(0,0));       // empty string: start and end are same
console.log("abcd".repeat(2.5));             // repeat count rounded down to 2 => "abcdabcd"
console.log("anjlesh".slice(-2,0));          // negative start to 0 => empty string

console.log("kshitij".charAt(-2));           // invalid index => empty string
console.log("kshitij".charAt(2.5));          // converted to 2 => "h"
console.log("kshitij".charAt(100));          // index out of bounds => empty string
console.log("stringMethodsring".indexOf("ring", -7)); // invalid index treated as 0 => finds at 6

// ++++++++++++++++ STRING SPLIT ++++++++++++++++

let string = "mern stack  lectures";
console.log(string.split());       // no separator => returns entire string in array
console.log(string.split(" "));    // splits by single space
console.log(string.split("  "));   // splits by double space => fewer parts

let string2 = "mern stack   lectures";
console.log(string2.split("  "));  // still works, but spacing matters

let words = "  Hello My name is Anjlesh ";
console.log(words.trim().split('').length);  // trims whitespace, splits into characters, then counts

// Que: Toggle the case of each character in string
function toggleCase(str){
  let n = str.length;
  let result = "";
  for(let i=0 ; i<n ; i++){
    let ch = str[i];
    if(ch >= 'a' && ch <= 'z'){
      result += ch.toUpperCase();
    }
    else if(ch >= 'A' && ch <= 'Z'){
      result += ch.toLowerCase();
    }
    else{
      result += ch;
    }
  }
  console.log(result);
}
toggleCase("HeLlo123");  // Output: hElLO123

// Que: Convert camelCase string to snake_case
function camelCaseToSnakeCase(str){
  let snake = "";
  for(let ch of str){
    if(ch >= 'a' && ch <= 'z'){
      snake += ch;
    } else {
      snake += "_" + ch.toLowerCase();
    }
  }
  console.log(snake);
}
camelCaseToSnakeCase("camelCaseWord");  // Output: camel_case_word

// Que: Convert snake_case string to camelCase
function snakeCaseToCamelCase(str){
  let s = str.split('_');
  let result = "";

  for(let word of s){
    if(result.length == 0){
      result += word.toLowerCase();  // first word remains lowercase
    } else {
      result += word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
  }
  console.log(result);
}
snakeCaseToCamelCase("Snake_caSe_word");  // Output: snakeCaseWord

// Que: Extract word "Jungle" from a string
str = "   How_are_you_in Jungle:  ";
function extractJungle(str){
  str = str.trim();
  let idx = str.indexOf("Jungle");
  if(idx != -1){
    console.log(str.substring(idx, idx + 6));
  }
}
extractJungle(str);  // Output: Jungle

// Que: Replace all "in" with "on", except "Spain"
str = "Hi are you in Spain, which city are you in?? How's your pain";
function replaceInWithOn(str){
  console.log(str.replace("Spain", "#").replaceAll("in", "on").replace("#", "Spain"));
}
replaceInWithOn(str);

// Que: Check if a string is a palindrome (ignore case and spaces)
str = "Nurses Run";
function isPalindrome(str){
  let cleaned = str.toLowerCase().replaceAll(' ', '');
  let reversed = cleaned.split('').reverse().join('');
  return reversed === cleaned;
}
console.log(isPalindrome(str));           // true
console.log(isPalindrome("Race car"));    // true

// Que: Find length of longest word in a sentence
let sentence = "Pune is the most loved city, for its weather";
function longestWord(sentence){
  let arr = sentence.split(' ');
  let maxLen = -Infinity;
  for(let word of arr){
    if(word.length > maxLen) maxLen = word.length;
  }
  console.log(maxLen);
}
longestWord(sentence);  // Output: 7

// Que: Find first non-repeating character in a string
str = 'aabb';
function findFirstNonRepeating(str){
  for(let i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      console.log(str[i]);
      return;
    }
  }
  console.log(`No Non-repeating characters found in "${str}"!`);
}
findFirstNonRepeating(str);  // Output: No non-repeating char

// Que: Count frequency of each character
function freqOfEachChar(str){
  let freq = {};
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(freq[ch] == undefined){
      freq[ch] = 1;
    } else {
      freq[ch] += 1;
    }
  }
  console.log({freq});
}
freqOfEachChar("abca bb");  
// Output: { a: 2, b: 3, c: 1,  : 1 }

// Que: Check if an array includes another array (incorrect logic)
let arr1 = ['a', 'b']
let arr2 = ['a', 'b', 'c', 'd']

// Incorrect usage, should compare elements not arrays
if(arr2.includes(arr2)) console.log("Found");
