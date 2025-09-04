"use strict";

const jonas = {
	name: "Rahul Rudra",

	age: 34,

	printOutput: function () {
		return `My Name is ${this.name}`;
	},
	calcAge: function () {
		console.log(2037 - this.year);
	},
};

console.log("13", jonas.printOutput());

const calcAge = function (birthYear) {
	console.log(2037 - birthYear);
	console.log("16", this);
};

calcAge(1992);
const calcAgeArrow = (birthYear) => {
	console.log("21", this);
};

calcAge(1992);

const matilda = {
	year: 2019,
};
matilda.calcAge = jonas.calcAge;
console.log("34", matilda.calcAge);

var year3 = 234;

const jonas1 = {
	name: "Rahul Rudra",

	age: 34,

	printOutput: function () {
		return `My Name is ${this.name}`;
	},
	calcAge: () => {
		console.log(this);
		console.log("45", 2037 - this.year3);
	},
};

console.log("51", jonas1.calcAge());

console.log(this.firstName);
console.log(window);
