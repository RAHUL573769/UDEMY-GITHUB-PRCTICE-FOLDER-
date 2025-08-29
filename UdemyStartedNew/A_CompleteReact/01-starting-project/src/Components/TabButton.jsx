// const handleClick = () => {
// 	console.log("Hello World");
// };

const TabButton = ({ children, handleClick }) => {
	return (
		<div>
			<li>
				<button onClick={handleClick}>{children}</button>
			</li>
		</div>
	);
};

export default TabButton;
