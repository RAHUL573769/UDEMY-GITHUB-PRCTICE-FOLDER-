import React, { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";
const [selectedTopic, setSelectedTopic] = useState();
// const [selectedTopic, setSelectedTopic] = useState("Please Select a Button");

const handleClick = (data) => {
	console.log("Hello World", data);
	setSelectedTopic(data);
};
console.log(EXAMPLES.components);
const Examples = () => {
	return (
		<div>
			<menu>
				<TabButton handleClick={() => handleClick(" components")}>
					Components
				</TabButton>
				<TabButton handleClick={() => handleClick("jsx")}>JsX</TabButton>
				<TabButton handleClick={() => handleClick("props")}>Props</TabButton>
				<TabButton handleClick={() => handleClick("state")}>State</TabButton>
			</menu>
			<div id='tab-content'>
				{!selectedTopic ? <p>Please Select a Topic</p> : null}

				{selectedTopic ? (
					<div>
						<h3>{EXAMPLES[selectedTopic]?.title}</h3>
						<p>{EXAMPLES[selectedTopic]?.description}</p>
						<code>{EXAMPLES[selectedTopic]?.code}</code>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Examples;
