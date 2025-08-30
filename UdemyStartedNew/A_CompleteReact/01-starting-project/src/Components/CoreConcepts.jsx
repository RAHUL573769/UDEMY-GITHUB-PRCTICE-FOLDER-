import { CORE_CONCEPTS } from "../../data";
import CoreComponents from "./CoreComponents";

const CoreConcepts = () => {
	return (
		<div>
			<h2>Core Components</h2>
			<ul>
				{CORE_CONCEPTS.map((conceptItem) => (
					<CoreComponents {...conceptItem}></CoreComponents>
				))}
				{/* <CoreComponents concept={CORE_CONCEPTS[0]}></CoreComponents>
						<CoreComponents concept={CORE_CONCEPTS[1]}></CoreComponents>
						<CoreComponents concept={CORE_CONCEPTS[2]}></CoreComponents> */}
			</ul>
		</div>
	);
};

export default CoreConcepts;
