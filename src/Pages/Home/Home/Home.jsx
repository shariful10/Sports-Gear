import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {

	return (
		<div>
			<Helmet>
				<title>Sports Gear | Home</title>
			</Helmet>
			<Slider />
			<PopularClasses />
			<PopularInstructors />
			<AboutUs />
		</div>
	);
};

export default Home;
