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
const weekdays = [
  'mon',
  'tue',
  'wed',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];
// Data needed for first part of the section
const hours = {
  [weekdays[3]]: {
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
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient, otherIngredients);
  // },
  openingHours: hours,

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
};

const a = [1, 2, 3, 4, 5];

console.log(a);
const c = a[3];
console.log(c);
const [first, second] = restaurant.categories;
console.log(second);

console.log(restaurant.order(2, 0));

const [main, primary] = restaurant.order(2, 0);

console.log(main);

const nested = [1, 2, 3, [7, 8, 9]];

const [i, j, k, l] = nested;

console.log(l);

//
const { name, categories, openingHours } = restaurant;
console.log('Opening Hours', openingHours);
//Mutating Variables
let a1 = 111;
let b1 = 222;
const obj = { a1: 32, b1: 67 };
({ a1, b1 } = obj);

console.log(a1);

//nested objects'

const {
  fri: { open1, close1 },
} = restaurant.openingHours;

console.log(open1);

restaurant.orderDelivery({
  time: '12pm',
  location: 'Kolkata',
  startIndex: 2,
  mainIndex: 5,
});
console.log(restaurant.orderDelivery());
// ---------------
const array = [7, 8, 9];
const newArray = [...array];
console.log(newArray);

const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

//Objects

const newRestaurant = { ...restaurant, founder: 'Rahul Rudra' };
const newRestaurantCopy = { ...restaurant, founder: 'Rahul Rudra-1' };

console.log('New Restaurant', newRestaurant);
console.log('New Restaurant Copy', newRestaurantCopy);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza);

const { thu, ...otherDays } = restaurant.openingHours;
console.log(otherDays);

const add = function (...numbers) {
  console.log(numbers);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log(sum);
    sum = sum + numbers[i];
  }
};

add(2, 3, 4, 5);

restaurant.orderPizza('mushrooms', 'onions', 'pasta', 'cucumber');

console.log(3 || 'Rahul');

console.log(true || 0);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) {
  console.log(item);
}
console.log(menu2.entries());

for (const [item, el] of menu2.entries()) {
  console.log(`${item + 1}  Element ${el}`);
}
console.log(restaurant);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day} , we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method doesnot exist');

const values = Object.values(openingHours);

const keys = Object.keys(openingHours);

console.log('Values', values);
const entries = Object.entries(openingHours);

console.log('Entries', entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
const orderSet = new Set(['Pasta', 'Pizza', 'Risoto', 'Pizza']);

// console.log(new Set('Jonas'));
// orderSet.add('Yammy');

// orderSet.clear();
// console.log(orderSet);
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
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection', commonFoods);
console.log([...commonFoods]);
const italianMexicanFusion = italianFoods.union(mexicanFoods);

console.log(italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);

console.log(uniqueItalianFoods);

const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set('Categories', ['Italian', 'Pizerria', 'Vegetarian']);

console.log(rest.get('name'));
console.log(rest.size);
