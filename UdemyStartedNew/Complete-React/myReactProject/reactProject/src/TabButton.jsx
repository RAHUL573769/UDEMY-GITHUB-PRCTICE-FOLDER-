import React from "react";

const TabButton = ({ children, handleClick }) => {
	return (
		<div>
			<li>
				<button onClick={handleClick}>{children} </button>
			</li>
			<li></li>
		</div>
	);
};

export default TabButton;
