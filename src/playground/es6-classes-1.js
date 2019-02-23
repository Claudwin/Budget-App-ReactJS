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

const me = new Person('Claude Fortune', 23);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());