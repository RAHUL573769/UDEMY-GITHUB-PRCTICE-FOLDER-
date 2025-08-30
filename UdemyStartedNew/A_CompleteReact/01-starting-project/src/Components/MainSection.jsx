import React from "react";

const MainSection = ({ title, children }) => {
	return (
		<div>
			<h3>{title}</h3>
			{children}
		</div>
	);
};

export default MainSection;
