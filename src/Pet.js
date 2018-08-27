import React from "react";

const Pet = props => {
	//The same this is JSX but harder to read
	/*
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, props.breed)
	]);
	*/

	//JSX much easier to use/read
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.animal}</h2>
			<h2>{props.breed}</h2>
		</div>
	);
};

export default Pet;
