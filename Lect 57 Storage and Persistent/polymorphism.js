class Person {
  name = "";
  age = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() { // same method name
    console.log(`Hello! I am ${this.name}`);
  }
}

let person = new Person("Anjlesh", 23);

class Employee extends Person {
  employeeId;
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }

  greet() { // same method name
    console.log(`Hi I'm ${this.name}, my employee id is:${this.employeeId}`);
  }
}

let employee = new Employee("Raj", 23, 1001);
employee.greet();
person.greet();







// Polymorphism (another example)
class Shape {
  area() {
    return 0;
  }
}

class Rectange extends Shape {
  constructor(height, width) {
    super();
    this.width = width;
    this.height = height;
  }
  // method overriding
  area() {
    return this.width * this.height;
  }

  type() {
    console.log("my type is rectangle");
  }
}

class Square extends Rectange {  // every square is a rectangle
  constructor(side) {
    super(side, side);
  }

  type() {
    super.type();
    console.log(`Square is a special case of rectangle where all sides are of the same dimension`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes = [new Rectange(4, 5), new Circle(10), new Shape()];

for (let shape of shapes) {
  console.log(shape.area());
}

// same method is called but behaviour is different.
// behaviour depends on the object

const square = new Square(10);
console.log("area of square", square.area());
square.type();
