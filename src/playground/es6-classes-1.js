console.log('es6-classes-1.js is running');

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}`;
    }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
    }
  } 

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGretting() {
    let greeting = super.getGretting();
    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting;
  }
}
const me = new Traveler('Claude Fortune', 23, 'Edmonton');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());

