function fruitProcessor(apple, oranges) {
	const juice = `Fruits with ${apple} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(4, 0);

const orangeJuice = fruitProcessor(0, 8);

console.log(appleJuice);

console.log(orangeJuice);

function calcAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calcAge1(2021);

const age2 = calcAge1(2024);

console.log(`My First age is ${age1} and Second age is ${age2}`);

const cutPieces = (pieces) => {
	return pieces * 4;
};
const fruitProcessor1 = (apples, oranges) => {
	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = ``;
};
