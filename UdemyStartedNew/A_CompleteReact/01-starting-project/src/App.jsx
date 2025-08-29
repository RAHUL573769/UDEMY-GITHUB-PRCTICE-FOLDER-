import CoreComponents from "./Components/CoreComponents";
import Header from "./Components/Header";
import { CORE_CONCEPTS } from "../data";
import TabButton from "./Components/TabButton";
// function CoreComponents(props) {
// 	return (
// 		<li>
// 			<img src={props.image}></img>
// 			<h3>{props.title}</h3>
// 			<p>{props.description}</p>
// 		</li>
// 	);
// }

const handleClick = (data) => {
	console.log("Hello World", data);
};

function App() {
	return (
		<div>
			<Header></Header>
			<main>
				<section id='core-concepts'>
					<h2>Core Components</h2>
					<ul>
						<CoreComponents concept={CORE_CONCEPTS[0]}></CoreComponents>
						<CoreComponents concept={CORE_CONCEPTS[1]}></CoreComponents>
						<CoreComponents concept={CORE_CONCEPTS[2]}></CoreComponents>
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton handleClick={() => handleClick("Jsx")}>
							Components
						</TabButton>
						<TabButton handleClick={() => handleClick("Jsx")}>JsX</TabButton>
						<TabButton handleClick={() => handleClick("Props")}>
							Props
						</TabButton>
						<TabButton handleClick={() => handleClick("State")}>
							State
						</TabButton>
					</menu>
					Dynamic Content
				</section>
			</main>
		</div>
	);
}

export default App;
