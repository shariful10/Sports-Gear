import React from "react";
import useTheme from "../../../Hooks/useTheme";

const PopularInsrtructor = ({ item }) => {
	const { image, name, total_students } = item;
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`${
				isDarkMode
					? "card w-full bg-black text-white shadow-xl"
					: "card w-full bg-base-100 shadow-xl"
			}`}>
			<img className="rounded-t-2xl h-[300px] md:h-[400px]" src={image} alt="Shoes" />
			<div className="card-body">
				<h2 className="card-title font-inter">Name: {name}</h2>
				<p className="text-[18px] font-inter">Number of Students: {total_students}</p>
			</div>
		</div>
	);
};

export default PopularInsrtructor;
