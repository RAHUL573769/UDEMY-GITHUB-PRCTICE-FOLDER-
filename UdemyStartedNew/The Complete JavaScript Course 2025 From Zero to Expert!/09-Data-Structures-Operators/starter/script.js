'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1},${ing2} and ${ing3} `);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const array = [1, 2, 3, 4];

const badArray = [1, 2, 3, 4, 5, ...array];

console.log(badArray);

const newMenu = [...restaurant.mainMenu, 'Yokii'];
console.log(newMenu);

//Join Array

const newMenu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenu1);
//Iterables:Arrays,Strings,Maps,Objects,Sets
// const ingredients = [
//   prompt('Lets Make Pasta Ingredient 1'),
//   prompt('Lets Make Pasta Ingredient 2'),
//   prompt('Lets Make Pasta Ingredient 3'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);
//------------------------------Rest Parameter/////////////

const [firstElement, ...secondElement] = [1, 2, 3, , 45, 5, 3, 2];

console.log(typeof secondElement);

const addFunction = function (num1, ...numbers) {
  console.log(numbers);
  console.log(num1);
};

addFunction(1, 23, 4, 5, 6);

// const x = [1, 2, 3, 4];
// addFunction(...x);

// And Or Operator
console.log(3 || 'Jonas');
console.log(typeof !!0);
// dvdvdsvsdvsdvbdsn,s

//Logical Operators
const rest1 = {};
const players = {
  goals: ['Lewandoski', 'Higuewn', 'Ronaldo'],
};

const goalsScored = (...players2) => {
  console.log('102', players2);
};

goalsScored(...players.goals);

console.log(players.goals);

console.log(newMenu1.entries());

for (const [i, el] of newMenu1.entries()) {
  // console.log(i);

  console.log(`${i + 1}:${el}`);
}
