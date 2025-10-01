console.log("anjlesh".substring(0,0)); // gives empty string
console.log("abcd".repeat(2.5)); // gives abcdabcd
// console.log("abcd".repeat(-2)); //invalid count error
console.log("anjlesh".slice(-2,0)); // gives empty string

console.log("kshitij".charAt(-2)); // gives empty string
console.log("kshitij".charAt(2.5)); // gives character at 2nd index
console.log("kshitij".charAt(100)); // gives empty string
console.log("stringMethodsring".indexOf("ring", -7)); // search "ring" after 0th index










// ++++++++++++++++++++++++ MORE STRING METHODS ++++++++++++++++++++++++


// split
let string = "mern stack  lectures";
console.log(string.split());
console.log(string.split(" "));
console.log(string.split("  "));


let string2 = "mern stack   lectures";
console.log(string2.split("  "));


let words = "  Hello My name is Anjlesh ";
console.log(words.trim().split('').length);





// Que: given a string, toggle its case
// input : HelLo
// output: hELlO

function toggleCase(str){
  let n = str.length;
  let result = "";
  for(let i=0 ; i<n ; i++){
    let ch = str[i];

    if(ch>='a' && ch <='z'){
      result += ch.toUpperCase();
    }
    else if(ch>='A' && ch <='Z'){
      result += ch.toLowerCase();
    }
    else{
      result += ch;
    }
  }
  console.log(result);
}

toggleCase("HeLlo123");



// Que: Write a function to convert camelCase to snake_case
function camelCaseToSnakeCase(str){
  let n = str.length;
  let snake = "";
  for(let i=0 ; i<n ; i++){
    let ch = str[i];
    if(ch >= 'a' && ch <= 'z'){
      snake += ch;
    }
    else{
      snake += ("_" + ch.toLowerCase());
    }
  }
  console.log(snake);
}

camelCaseToSnakeCase("camelCaseWord");


// snake_case to camelCase
function snakeCaseToCamelCase(str){
  let s = str.split('_');
  let result = "";

  for(let word of s){
    if(result.length == 0){
      result += word.toLowerCase();
    }
    else
      result += (word[0].toUpperCase() + word.substring(1).toLowerCase());
  }
  console.log(result);
}

snakeCaseToCamelCase("Snake_caSe_word");


// Que: extract Jungle from below String using string methods
str = "   How_are_you_in Jungle:  ";

function extractJungle(str){
  str = str.trim();
  // console.log(str);
  // if(str.includes('Jungle')){
  //   console.log("Jungle");
  // }

  let idx = str.indexOf("Jungle");
  if(idx != -1){
    console.log(str.substring(idx, idx+6));
  }

}

extractJungle(str);


// EXPLORE parseInt and parseFloat


// Only use replace() and replaceAll() method and replace "in" with "on" in below string
// NOTE: Spain should remain as it is
str = "Hi are you in Spain, which city are you in?? How's your pain";
function replaceInWithOn(str){
  // My Way
  // console.log(str);
  // let newStr = str.replaceAll('in', 'on');
  // console.log(newStr);

  // newStr = newStr.replace('on', 'in');
  // console.log(newStr);

  // newStr = newStr.replace('on', 'in');
  // console.log(newStr);

  // newStr = newStr.replace('in', 'on');
  // console.log(newStr);


  // Substitution Jutsu
  console.log(str.replace("Spain", "#").replaceAll('in', 'on').replace('#', "Spain"));
}

replaceInWithOn(str);




// Que: check if a string is a palindrome or not, ignore cases(upper/lower) & spaces
str = "Nurses Run";
function isPalindrome(str){
  newStr = str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
  return newStr === str.toLowerCase().replaceAll(' ', '');
}

console.log(isPalindrome(str));
console.log(isPalindrome("Race car"));


// Homework: find the length of the longest word
// input: Pune is the most loved city, for its weather
// output: 7

let sentence = "Pune is the most loved city, for its weather";
function longestWord(sentence){
  let arr = sentence.split(' ');
  let maxLen = -Infinity;
  for(let word of arr){
    if(word.length > maxLen) maxLen = word.length;
  }
  console.log(maxLen);
}

longestWord(sentence);




// Que: Find the first non-repeating character in a string
// Input: "stringMethodsring"
// output: "M"

// str = "stringMethodsring";
str = 'aabb';
function findFirstNonRepeating(str){
  for(let i=0 ; i<str.length ; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      console.log(str[i]);
      return;
    }
  }
  console.log(`No Non-repeating characters found in "${str}"!`);
}

findFirstNonRepeating(str);






// Que: Function to count the frequency of each character
function freqOfEachChar(str){
  // using objects like map
  let freq = {};
  str = str.toLowerCase();
  for(let i=0 ; i<str.length ; i++){
    let ch = str[i];
    // if(ch<'a' || ch>'z') continue;

    if(freq[ch] == undefined){
      freq[ch] = 1;
    }
    else{
      freq[ch] = freq[ch] + 1;
    }
  }
  console.log({freq});
}

freqOfEachChar("abca bb");



// Que: find the frequency of each word from the given string
// input: "abc gad abc hat abc hat";
// output: { abc: 3,
//           gad: 1,
//           hat: 2,
//         }  


// let scores = {
//     Adrian: 12,
//     Bruno: 12,
//     Goran: 12
//   };

// let maxi = Math.max(...Object.values(scores));

// console.log(maxi);

// for(let key in scores){
//     if(scores[key] == maxi){
//       console.log(key);
//     }
//   }


let arr1 = ['a', 'b']
let arr2 = ['a', 'b', 'c', 'd']

if(arr2.includes(arr2)) console.log("Found");
