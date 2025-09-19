/* // ====================== Objects ======================

let motherName = "Priya Singh", motherAge = 32, motherAdd = "Baner, Pune";

let stuName = "Pratik Patil", stuAge = 15, stuClas = "10th" ,gender = "Male",
    stuAdd = "Viman Nagar, Pune";


let mother = {
  name : "Priya Singh",
  age : 32,
  address : "Baner, Pune"
}

let student = {
  name : "Pratik Patil",
  age : 15,
  gender: "Male",
  address : "Viman Nagar, Pune",
  class : "10th",
}

mother.occupation = "Housewife"; // occupation was not there, so it gets added
mother.age = 34; // age was already there, so it gets updated


console.log({mother, student});




// Create an object vehicle1 having following properties:
//  no.of seats, top speed, mileage, no.of airbags

let vehicle1 = {
  noOfSeats : 5,
  topSpeed : "150 km/h",
  mileage : "18 km/litre",
  noOfAirbags : 2
}

// updating no.of seats
vehicle1.noOfSeats = 5;

// adding new property 
vehicle1.colors = ["Red", "Black", "White"];

console.log({vehicle1});

// Deleting a property in vehicle1
delete vehicle1.noOfAirbags;
console.log({vehicle1});


// Adding nested object - address inside vehicle1
vehicle1.address = {
  addressLine1 : "Aria Tower",
  addressLine2 : "Baner",
  city : "Pune",
  state : "Maharashtra",
}

console.log({vehicle1});


// Printing the city of vehicle1
console.log("\nCity of vehicle1 address:",vehicle1.address.city);



// Accessing a property that is not yet defined
console.log("\nvehicle1 price:", vehicle1.price); // undefined
// console.log("\nvehicle1 price:", vehicle1.price.inRupees); // error: Cannot read properties of undefined (reading 'inRupees')




// Handling undefined property (?.)
console.log("\nvehicle1 price:", vehicle1?.price?.inRupees); // error: Cannot read properties of undefined (reading 'inRupees')






vehicle1.name = "Scorpio";

vehicle2 = {
  name : "Thar",
  noOfSeats : 5,
  topSpeed : "130 km/h",
  mileage : "15 km/litre",
  noOfAirbags : 2,
  colors : ["Red", "Black", "White"],

  address : {
    addressLine1 : "ABC Tower",
    addressLine2 : "Kothrud",
    city : "Pune",
    state : "Maharashtra",
  }
}

// Array of objects
const arr1 = [vehicle1, mother, student];

const vehicles = [vehicle1, vehicle2];
console.log({vehicles});





// Que: print name of the vehicle and its city from vehicles array
for(let vehicle of vehicles){
  console.log("Vehicle name:", vehicle?.name, ", City:", vehicle?.address?.city);
}

// ? => Means Optional Chaining 


// Printing all properties of vehicle1
console.log("\nProperties of vehicle1:");
for(let key in vehicle1){
  console.log(key, ":", vehicle1[key]);
}









// Getting all keys of vehicle1 in an array
const vehicleObjectKeys = Object.keys(vehicle1);
const addressObjectKeys = Object.keys(vehicle1.address);
console.log("\nvehicleObjectKeys:", vehicleObjectKeys);
console.log("addressObjectKeys:", addressObjectKeys);



const vehicleObjectValues = Object.values(vehicle1);
console.log("\nvehicleObjectValues:", vehicleObjectValues);
const addressObjectValues = Object.values(vehicle1.address);
console.log("addressObjectValues:", addressObjectValues);



// for ... of loop
for(let value of vehicles){
  console.log(value);
}





// Change the value of city to mumbai if city is pune.
for(let vehicle of vehicles){
  if(vehicle?.address?.city === "Pune"){
    vehicle.address.city = "Mumbai";
  }
}

console.log(vehicles);



let vehicle3 = {
  name : "Fortuner",
  noOfSeats : 7,
  topSpeed : "160 km/h",
  currentSpeed : 100,
  mileage : "12 km/litre",
  noOfAirbags : 4,
  colors : ["Silver", "Black", "White"],

  isRunning : function(){
    if(this.currentSpeed > 0)
    console.log( "Fortuner is running");

    else console.log( "Fortuner is not running");
  },
}

vehicle3.isRunning();
vehicle3.currentSpeed = 0;
vehicle3.isRunning();
 */




// Resume mgmt system

const resume = {
  name: "Anjlesh",
  email : "anjlesh@gmail.com",
  phone: "1234567890",
  skills: ["C++", "JavaScript", "ReactJS"],
  experience: ["College Projects", "Internship at XYZ"],

  display: function(){
    // display all the details of resume
    console.log("\n\n---------- Resume Details ----------");
    console.log(this.name);
    console.log(this.email);
    console.log(this.phone);
    console.log(this.skills);
    console.log(this.experience);
  },


  addSkills: function(newSkill){
    // add new skill to skills array
    if(this.skills.includes(newSkill)){
      console.log("\n\nSkill already present");
    }
    else{
      this.skills.push(newSkill);
      console.log("\n\nAdded", newSkill, "to your resume");
    }
    
  },


  addWorkExperience: function(newExp){
    // add new experience to experience array
    if(this.experience.includes(newExp)){
      console.log("\n\nSkill already present");
    }else{
      console.log("\n\nAdded", newExp, "to your resume");
      this.experience.push(newExp);
    }

  },
  

  showSkills: function(){
    // print all skills
    console.log("\n\nPrinting all your skills");
    console.log(this.skills);
  }
} 


resume.display();
resume.addSkills("MongoDB");
resume.addWorkExperience("Internship at ABC");
resume.addWorkExperience("Internship at ABC");
resume.showSkills();
resume.display();
