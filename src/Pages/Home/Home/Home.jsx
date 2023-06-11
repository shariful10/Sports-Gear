import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
	return (
		<div className="my-container">
			<Slider />
			<div className="px-4 md:px-0">
				<PopularClasses />
			</div>
		</div>
	);
};

export default Home;
