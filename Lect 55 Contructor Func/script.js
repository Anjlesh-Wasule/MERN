// car 1 and car 2 have similar properties, when we create them we write repetative code
// this can be solved by using constructor functions

function Car(name, manufacturer, year){
  this.name = name;
  this.manufacturer = manufacturer;
  this.year = year;

  this.speed = 0;
  this.accelerate = function(){
    this.speed += 25;
  }
}


let  car1 = new Car("Ghost", "Rolls Royce", "2025");
let  car2 = new Car("Hilux", "Toyota", "2026");

console.log(car1, car2);

console.log(JSON.stringify(car1));

car1.accelerate();

console.log(car1);