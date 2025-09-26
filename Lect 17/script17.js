/* const team = {
  name: "Indian Cricket Team",
  // This will store an object with two properties -> 
  players: [{id: 1, scores: [10,34,80]}],

  addPlayers: function(id){
    // assume always a new player is coming with unique id, this function should create a new
    // player with this id and empty scores array, then push this player to players array
    this.players.push({id:id, scores:[]});
  },

  addScore: function(id, score){
    // find the player with this id, and push this score to its score array
    for(let player of this.players){
      if(player.id === id){
        player.scores.push(score);
        return;
      }
    }
  },

  avgScore: function(id){
    // find the player with this id and calculate its avg score and return it
    for(let player of this.players){
      if(player.id === id){
        let sum = 0;
        for(let score of this.player.scores) sum += score;
        return sum/player?.scores?.length;
      }
    }
  },

  teamAvg: function(){ // optional
    // calculate the average of all players combined 
  }
}


team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

console.log("average score of player 1 " + team.avgScore(1));
console.log("average score of player 2 " + team.avgScore(2));

console.log("average score of player 2 " + team.teamAvg());
 */








// Some properties about keys in Objects

/* let obj1 = {
  age: 12,
  6 : 90
}

// by default all the keys are of string types, except keys of type integer
console.log("age of obj1",obj1['age']);
console.log("6",obj1['6']);
console.log("6",obj1[6]); */


/* // Other way of creating an object
obj2 = new Object();
obj2.name = "Anjlesh";
obj2.class = 10;

console.log(obj2);

// ======== obj1 and obj2 are same =======







// Copying objects
// copying obj1 in obj2
obj2 = {...obj1}; // ... is known as spread opertor
console.log(obj2);




// Spread operator in objects and arrays
let arr1 = [12,32,4,2];
let arr2 = [arr]; // without using spread operator
let arr3 = [...arr]; // using spread operator
console.log(arr2);
console.log();
console.log(arr3);




// in Onjects
let student1 = {
  age: 10,
  name: "Raj",
}

let student2 = student1;
let student21 = {student1};
let student3 = {...student1}

console.log({student2,student21,student3});



let arr11 = [12,2,34,3,5];
let arr12 = [78,34,2,41];
let newArr = [...arr11, ...arr12]; */


let studentPersonalDetails = {
  age: 12,
  motherName: "XYZ",
};


let studentAcademicDetails = {
  roll : 101,
  section: "A",
} 


let studentDetails = {
  ...studentPersonalDetails, ...studentAcademicDetails
}

console.log({...studentDetails});





// Issues with copying object with spread operators
obj1 = {
  a: {
    b: {
      c:3,
    },
  },
};


obj2 = {...obj1};
obj2.a.b.c = 12;

console.log({obj2});
console.log({obj1});


// Issue - while copying objects, only one level is copied
// and other levels are referenced




// When Exactly to use spread operator in objects??
// When we need to copy one level only


let student = {
  name : "Pratik Patil",
  age : 15,
  gender: "Male",
  address : "Viman Nagar, Pune",
  class : "10th",
}

// We can safely use shallow copy with spread operator
let studentCopy = {...student};
studentCopy.name = "copy";
console.log({studentCopy, student});


// Conclusion for using spread operator with objects: for one level it's deep copy
// for other nested levels, it's shallow copy


// Another way of copying an object (shallow copy)
let studentCopy2 = Object.assign({}, student);

// merging two objects using Object.assign method
let studentDetails2 = Object.assign(
  {},
  studentPersonalDetails,
  studentAcademicDetails
);


console.log({studentDetails2});




// deep Copying

let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));
console.log({deepCopyOfObj1});
deepCopyOfObj1.a.b.c = 100;
console.log({obj1}); // we can see original obj not getting changed
console.log({deepCopyOfObj1});
