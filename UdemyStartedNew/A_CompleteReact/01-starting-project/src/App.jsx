import CoreComponents from "./Components/CoreComponents";
import Header from "./Components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import TabButton from "./Components/TabButton";
import { useState } from "react";
import CoreConcepts from "./Components/CoreConcepts";
import Examples from "./Components/Examples";

function App() {
	return (
		<>
			<Header></Header>
			<main>
				<section id='core-concepts'>
					<CoreConcepts></CoreConcepts>
				</section>
				<section id='examples'>
					<Examples></Examples>
				</section>
			</main>
		</>
	);
}

export default App;
