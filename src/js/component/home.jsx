import React, { useState } from "react";

//create your first component

const Home = () => {

	const [color, setColor] = useState("red")
	return (
		<div className="text-center">
			<div className="soporte container"></div>
			<div className="btn-group-vertical traffic rounded-4">
			
				<button type="button" className={"btn rounded-circle btn-danger"+((color==="red")?" light":"")}
					onClick={() => setColor("red")}
				></button>
				<button type="button" className={"btn rounded-circle btn-warning"+((color==="yellow")?" light":"")}
					onClick={() => setColor("yellow")}
				></button>
				<button type="button" className={"btn rounded-circle btn-success"+((color==="green")?" light":"")}
					onClick={() => setColor("green")}
				></button>
			</div>

		</div>
	);
};

export default Home;
