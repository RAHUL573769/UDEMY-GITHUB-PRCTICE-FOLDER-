'use strict';

const jonas = [
  'Jonas',
  'Schmen',
  2025 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(typeof jonas[i]);
  types.push(typeof jonas[i]);

  if (typeof jonas[i] !== 'string') continue;
  console.log('18', jonas[i], typeof jonas[i]);
}
// console.log("17", types);

const years = [1991, 1992, 1993, 1994, 1995];
const newArray = [];

for (let i = 0; i < years.length; i++) {
  newArray.push(2027 - years[i]);
}

console.log(newArray);
