const team = {
  name: "Indian Cricket Team",

  players: [{id:1, scores:[10,34,80]}],

  addPlayer: function(id){
    this.players.push({id: id, scores: []});
  },

  addScore: function(id, score){
    for(let player of this.players){
      if(player.id === id){
        player.scores.push(score);
      }
    }
  },

  avgScore: function(id){
    for(let player of this.players){
      if(player.id === id){
        let sum = 0;
        for(let score of player.scores) sum += score;
        return sum/player.scores.length;
      }
    }
  },

  teamAvg: function(){
    let allScoreSum = 0;
    let totalLen = 0;
    for(let player of this.players){
      totalLen += player.scores.length;
      for(let score of player.scores){
        allScoreSum += score;
      }
    }
    console.log(allScoreSum);
    return allScoreSum/totalLen;
  },
};

team.addPlayer(2);
team.addPlayer(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

console.log("average score of player 1 " + team.avgScore(1));
console.log("average score of player 2 " + team.avgScore(2));
console.log("average score of player 3 " + team.avgScore(3));

console.log("Team's average score is " + team.teamAvg());

















// copying objects using spread opertor
let obj1 =  {
  age: 12,
  6: 20,    // this is also valid
};






// copying multiple objects inside an object
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








let obj2 = {...obj1}; // spread opertor can copy objects at one level only
// Meaning it Fails for nested objects

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
console.log({obj1}); // c is changed to 12 
// even though we have copied it using the spread operator


// To solve this issue we create deep copy of objects
console.log(JSON.stringify(studentPersonalDetails)); // outputs a stringified version of the original object, keys are turned to objects

console.log(JSON.parse(JSON.stringify(studentPersonalDetails))); // converts back to json object



let deepCopyOfObj1 = JSON.parse(JSON.stringify(obj1));
console.log({deepCopyOfObj1});
deepCopyOfObj1.a.b.c = 100;
console.log({obj1}); // we can see original obj not getting changed
console.log({deepCopyOfObj1});