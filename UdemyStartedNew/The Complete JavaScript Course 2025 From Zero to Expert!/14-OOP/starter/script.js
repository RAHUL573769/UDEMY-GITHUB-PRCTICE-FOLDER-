'use strict';

const Person = function (firstName, birthYear) {
  //instance properties
  console.log(this);

  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas instanceof Person);
//Prototype

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(jonas);
