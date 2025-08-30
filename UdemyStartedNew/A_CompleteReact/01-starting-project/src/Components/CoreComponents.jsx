import React from "react";
import MainSection from "./MainSection";

const CoreComponents = (props) => {
	console.log(props);
	return (
		<MainSection title='New Title'>
			<li>
				<img src={props.image}></img>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</li>
		</MainSection>
	);
};

export default CoreComponents;
