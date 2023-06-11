import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
	return (
		<div className="my-container">
			<Slider />
            <PopularClasses />
		</div>
	);
};

export default Home;
