const Section = ({ children, id, title }) => {
	return (
		<div id={id}>
			<h2>{title}</h2>

			{children}
		</div>
	);
};

export default Section;
