// const handleClick = () => {
// 	console.log("Hello World");
// };

const TabButton = ({ children, ...props }) => {
	console.log(props);
	return (
		<div>
			<li>
				{/* <button className='active' onClick={handleClick}>
					{children}
				</button> */}
			</li>
		</div>
	);
};

export default TabButton;
