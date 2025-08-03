import React from "react";

import img from "../../src/assets/react.svg";
function getRandomNumber(max) {
	return Math.floor(Math.random() * (max + 1));
}

const reactDescriptions = ["Fundemental", "Crucial", "Core"];

const description = reactDescriptions[getRandomNumber(2)];
const Header = () => {
	return (
		<div>
			{" "}
			<header>
				<img src={img} alt='Stylized atom' />
				<h1>React Essentials</h1>
				<p>
					{description} React concepts you will need for almost any app you are
					going to build!
				</p>
			</header>
		</div>
	);
};

export default Header;
