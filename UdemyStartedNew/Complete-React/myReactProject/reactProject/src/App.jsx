import img from "../src/assets/react.svg";

function getRandomNumber(max) {
	return Math.floor(Math.random() * (max + 1));
}

const reactDescriptions = ["Fundemental", "Crucial", "Core"];
const description = reactDescriptions[getRandomNumber(2)];
function Header() {
	return (
		<header>
			<img src={img} alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
function CoreConcepts({ title, description }) {
	return (
		<li>
			<img></img>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
function App() {
	return (
		<div>
			<section id='core-concepts'>
				<h2>CoreConcepts</h2>
				<CoreConcepts
					title='First Component'
					description={"First Description"}
				></CoreConcepts>
				<CoreConcepts></CoreConcepts>
				<CoreConcepts></CoreConcepts>
				<CoreConcepts></CoreConcepts>
			</section>
			<Header />
			<main>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
