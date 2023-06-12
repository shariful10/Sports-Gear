import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from "react-helmet-async";
import useTheme from "../../../Hooks/useTheme";

const Home = () => {
	// const { isDarkMode } = useTheme();

	return (
		<div>
			<Helmet>
				<title>Sports Gear | Home</title>
			</Helmet>
			<Slider />
			<PopularClasses />
			<PopularInstructors />
		</div>
	);
};

export default Home;
