// // ∩ - intersection 
// // ∪ - union

// // Creating sets
// let set1 = new Set([1,2,3,4,5]); 
// let set2 = new Set();
// set2.add(10);
// set2.add(20);
// set2.add(30);
// set2.add(20); // won't be included in the set
// set2.add(2); 
// set2.add(4); 

// console.log(set1);
// console.log(set2);

// // set.add(val) => adds new element in a set
// // set.delete(val) => deletes the specified element from the set
// // set.size() => outputs the size of the set

// // Converting set to array
// // 1. Using the spread operator
// let arr1 = [...set1];
// console.log(arr1);

// // 2. Using Array.from() method
// let arr2 = Array.from(set2);
// console.log(arr2);


// // Union operation
// console.log("Union of two sets", set1.union(set2));
// console.log("Difference of two sets", set1.difference(set2));
// console.log("Intersection of two sets", set1.intersection(set2));

// // custom implementation of intersection
// function customIntersection(set1, set2){
//   let interSet = new Set();

//   for(let num of set1){
//     if(set2.has(num)){
//       interSet.add(num);
//     }
//   }
//   return interSet;
// }

// console.log(customIntersection(set1, set2));



// // custom implementation of Union
// function customUnion(set1, set2){
//   let unionSet = new Set();

//   // for(let num of set1){
//   //   unionSet.add(num);
//   // }

  
//   // for(let num of set2){
//   //   unionSet.add(num);
//   // }

//   // return unionSet;

//   return unionSet = new Set([...set1, ...set2]);
// }
// console.log(customUnion(set1, set2));





// // Map
// let mp = new Map();
// mp.set("a", 1);
// mp.set("b", 2);
// mp.set("c", 3);
// mp.set("d", 4);

// console.log("Map keys",mp.keys());
// console.log("Map values",mp.values());


let sentence = "how many repeating word are there in this sentence which has repeating word count";

function repeatingWordsUsingMap(sentence){
  let mp1 = new Map();  
  let words = sentence.split(' ');

  for(let word of words){
    mp1.set(word, mp1.get(word)+1 || 1);
  }

  console.log("Repeating words in a sentence");
  for(let [key, value] of mp1){
    if(value > 1){
      console.log(key);
    }
  }

}

function repeatingWordsUsingSet(sentence){
  let words = sentence.split(' ');
  // using set
  let st = new Set();
  let repeating = new Array();
  for(let word of words){
    if(st.has(word)){
      repeating.push(word);
    }
    else st.add(word);
  }

  console.log(repeating);
}

repeatingWordsUsingMap(sentence);
repeatingWordsUsingSet(sentence);



function countVotes(votes) {
    let voterVotes = new Map(); // stores first vote per voter

    // Read each vote
    for (let [voterId, party] of votes) {

        // If this voter already voted, skip
        if (!voterVotes.has(voterId)) {
            voterVotes.set(voterId, party);
        }
    }

    // Count votes for each party
    let partyCount = new Map();

    for (let party of voterVotes.values()) {
        partyCount.set(party, (partyCount.get(party) || 0) + 1);
    }

    // Sort party names lexicographically
    let sortedParties = Array.from(partyCount.keys()).sort();

    // Print ALL parties with votes
    for (let party of sortedParties) {
        console.log(party + " " + partyCount.get(party));
    }
}