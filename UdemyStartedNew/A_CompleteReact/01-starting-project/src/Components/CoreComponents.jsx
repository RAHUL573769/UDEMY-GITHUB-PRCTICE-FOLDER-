import React from "react";

const CoreComponents = ({ concept }) => {
	console.log(concept);
	return (
		<div>
			<li>
				<img src={concept.image}></img>
				<h3>{concept.title}</h3>
				<p>{concept.description}</p>
			</li>
		</div>
	);
};

export default CoreComponents;
