/* Write your code below. Good luck! 🙂 */

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgKoalas >= 2(avgDolphins)) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else if (avgDolphins === 2(avgKoalas)) {
		console.log(` Dolphin win (${avgDolphins} vs.${avgKoalas} )`);
	} else {
		console.log("No team wins...");
	}
};

const calcAverage = (score1, score2, score3) => {
	const average = (score1 + score2 + score3) / 3;

	return average;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(44, 23, 71);

const avgKoalas = calcAverage(44, 23, 71);

const calculateAge = (year) => {
	const currentAge = new Date().getFullYear() - year;
	return currentAge;
};
const yearsUntilRetirement = (birthYear, firstName) => {
	const age = calculateAge(birthYear);

	const retirementAge = 65 - age;
	if (retirementAge > 10) {
		console.log(`${firstName} retires in ${retirementAge} years`);
		return retirementAge;
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
};

console.log(`Years of Retirement :${yearsUntilRetirement(1992, "Rahul")}`);

const checkWinner1 = (avgDolphins, avgKoalas) => {
	if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else if (avgDolphins >= 2 * avgKoalas) {
		console.log(` Dolphin win (${avgDolphins} vs.${avgKoalas} )`);
	} else {
		console.log("No team wins...");
	}
};

const calcAverage1 = (score1, score2, score3) => {
	const average = (score1 + score2 + score3) / 3;

	return average;
};

// const scoreDolphins1 = calcAverage(44, 23, 71);
// const scoreKoalas1 = calcAverage(65, 54, 49);

const avgDolphins1 = calcAverage(44, 23, 71);

const avgKoalas1 = calcAverage(44, 23, 71);
