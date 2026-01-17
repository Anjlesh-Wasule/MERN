// Inheritance

class Person {
  name = "";
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello I'm ${this.name}, my age is ${this.age}`);
  }
}

let person = new Person("Anjlesh", 23);
console.log(person);

// Derived class
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // calling the parent class's constructor
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}

let student = new Student("Anjlesh", 23, "MERN");
// calling the methods
student.greet();
student.study();
console.log(student)
console.log('%c --- INHERITANCE.JS START --- ', 'background: #020268; color: #bada55; padding: 5px; font-weight: bold;');



// another derived class
class Employee extends Person {
  employeeId;
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId
  }

  print() {
    console.log(`Hi I'm ${this.name}, my employee id is:${this.employeeId}`)
  }

}
