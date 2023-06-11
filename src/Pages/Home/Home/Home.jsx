import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
	return (
		<div className="">
			<Slider />
			<div className="px-4 md:px-0">
				<PopularClasses />
                <PopularInstructors />
			</div>
		</div>
	);
};

export default Home;
