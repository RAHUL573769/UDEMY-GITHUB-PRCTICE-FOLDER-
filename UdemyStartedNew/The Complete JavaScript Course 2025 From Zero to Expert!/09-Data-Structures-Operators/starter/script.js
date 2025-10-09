'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const openingHours = {
  [weekDays[3]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your Pasta with ${ing1},${ing2} and ${ing3} `);
  // },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1},${ing2} and ${ing3} `);
  },
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};
console.log('Restaurant', restaurant);
for (const day of weekDays) {
  console.log(day);

  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we are open at ${open}`);
}

const openingKeys = Object.keys(openingHours);
console.log('Opening Keys', openingKeys);
const openingValues = Object.values(openingHours);
console.log('Opening Values', openingValues);

const openingEntries = Object.entries(openingHours);
console.log('Opening Entries', openingEntries);

console.log(restaurant.openingHours.mon?.open); //undefined
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
let user = {
  profile: {
    name: 'Alice',
    age: null,
  },
};

// Using optional chaining and nullish coalescing together
let username = user.profile?.name ?? 'Guest';
let userAge = user.profile?.age ?? 18;
let userCity = user.address?.city ?? 'Unknown';

console.log(username); // "Alice"
console.log(userAge); // 18
console.log(userCity); // "Unknown"

const userData = {
  name: 'Rahul-Rudra',
  age: 12,
};

console.log(userData.name1 ?? 'Name Not Found');
const userData1 = {
  name: 'Rahul-Rudra',
  age: 12,
};

console.log(userData1.age1 ?? 'Fallback');
for (const [key, { open, close }] of openingEntries) {
  // (89)[('thu', { open: 12, close: 22 })];
  console.log('89', key, open, close);
}

const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Riotto']);

console.log(orderSet);
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

// const common = italianFoods.intersection(mexicanFoods);
// console.log('208', common);
// console.log([...common]);
// const union1 = italianFoods.union(mexicanFoods);

// console.log(union1);

// console.log('214', [...italianFoods, ...mexicanFoods]);
// console.log('215', new Set([...italianFoods, ...mexicanFoods]));
// console.log('216', [...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianAndMexican = italianFoods.symmetricDifference();
const rest = new Map();
rest.set(1, 'Friexe Italy');
console.log(rest.get(1)); // "Friexe Italy"

rest.set('name', 'Classico Italiano');
rest.set('1', 'Firango-Italy').set('open', '12');
console.log(rest.get('open')); // "Firango-Italy"

const time = 21;
console.log(rest.has('name'));

const question = new Map([
  ['question', 'What is the best Programming Language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
]);

console.log(question);
for (const [key, value] of question) {
  console.log(key);
  console.log(value);
}

// ---------- Coding Exercise

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

console.log(gameEvents.values());

const uniquesValues = new Set(gameEvents.values());

console.log(uniquesValues);
console.log(uniquesValues);

const uniquesValuesArrays = [...new Set(gameEvents.values())];
console.log(uniquesValuesArrays);

console.log(gameEvents.size);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for (const [min, event] of gameEvents) {
  console.log(min);
  console.log(event);

  const half = min <= 45 ? 'FIRST' : 'Second';

  console.log(`[${half} HALF] ${min}: ${event}
`);
}

const airline = 'TAP Air Portugal';
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf('')));

console.log(airline.slice(1, -1));

console.log(airline.toUpperCase());

const name = 'rAhuL ruDRA';

console.log(name.toLowerCase());

const lowerCaseName = name.toLowerCase();
const correctName = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);

console.log(correctName);

console.log(airline.slice(1));

console.log(name.slice(1));
