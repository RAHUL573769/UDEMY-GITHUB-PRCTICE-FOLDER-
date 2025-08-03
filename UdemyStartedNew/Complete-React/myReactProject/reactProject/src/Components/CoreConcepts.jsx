import React from "react";

const CoreConcepts = ({ title, description }) => {
	return (
		<div>
			<li>
				<img></img>
				<h3>{title}</h3>
				<p>{description}</p>
			</li>
		</div>
	);
};

export default CoreConcepts;
