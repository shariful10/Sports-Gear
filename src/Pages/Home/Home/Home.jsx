import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div className="">
			<Helmet>
				<title>Sports Gear | Home</title>
			</Helmet>
			<Slider />
			<div className="">
				<PopularClasses />
                <PopularInstructors />
			</div>
		</div>
	);
};

export default Home;
