import { useState } from "react";
import TabButton from "./TabButton";

import Header from "./Components/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import Section from "./Components/Section/Section.jsx";

const label = "hi";
function App() {
	const [tabElement, setTabElement] = useState("");
	const handleClick = (data) => {
		console.log("Clicked", data);
		setTabElement(data);
	};
	return (
		<div>
			<section id='core-concepts'>
				<h2>CoreConcepts</h2>
				<div>
					{" "}
					<CoreConcepts
						title='First Component'
						description={"First Description"}
					></CoreConcepts>
					<CoreConcepts></CoreConcepts>
					<CoreConcepts></CoreConcepts>
					<CoreConcepts></CoreConcepts>
				</div>
			</section>
			<Header></Header>
			<main>
				<h2>Time to get started!</h2>
			</main>
			<Section id='examples'>
				<h2>Examples</h2>
				<menu>
					<TabButton
						handleClick={() => handleClick("components")}
						label={label}
					>
						Component
					</TabButton>
					<TabButton
						handleClick={() => handleClick("Components")}
						label={label}
					>
						JSX
					</TabButton>
					<TabButton
						handleClick={() => handleClick("Components")}
						label={label}
					>
						Props
					</TabButton>
					<TabButton
						handleClick={() => handleClick("Components")}
						label={label}
					>
						State
					</TabButton>
				</menu>
				<div id='tab-content'>
					{!tabElement ? <h1>Please select a Topic</h1> : null}

					{tabElement ? (
						<div>
							<h3>My Name</h3>
						</div>
					) : null}
				</div>
			</Section>
		</div>
	);
}

export default App;
