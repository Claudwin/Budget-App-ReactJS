const person = {
  name: 'Claude',
  age: '31',
  location: {
    city: 'Edmonton',
    temp: 8
  }
}

const {name: firstName = 'Anyone', age} = person;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}`)