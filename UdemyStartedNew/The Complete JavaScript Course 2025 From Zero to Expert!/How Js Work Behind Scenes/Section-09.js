"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
	"pasta",
	"gnocchi",
	"tomatoes",
	"olive oil",
	"garlic",
	"basil",
]);

const mexicanFoods = new Set([
	"tortillas",
	"beans",
	"rice",
	"tomatoes",
	"avocado",
	"garlic",
]);

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	order: function (startIndex, mainIndex) {
		return [this.starterMenu[startIndex], this.location[mainIndex]];
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

	orderDelivery: function ({ startIndex, mainIndex, time, address }) {
		// console.log(obj);
		console.log(
			`Order Received ${this.starterMenu[startIndex]} at time ${time} on address:${address}`
		);
	},
};

restaurant.orderDelivery({ time: "22.30", address: "223 Nalapara" });
console.log(restaurant.orderDelivery);
const array = [1, 2, 3, 4, 5];

const [x, y, z] = array;

const [main, secondary] = restaurant.categories;
console.log(main, secondary);

const [main1, secondary1] = restaurant.order(2, 0);

console.log(main1, secondary1);

const nested = [1, 2, 3, [5, 6, 6, 7]];
const [i, j, k, [m, a, b, c]] = nested;
console.log(m);
console.log(c);
const {
	name: restaurantName,
	openingHours,
	categories,
	starterMenu = [],
} = restaurant;
console.log(starterMenu);
