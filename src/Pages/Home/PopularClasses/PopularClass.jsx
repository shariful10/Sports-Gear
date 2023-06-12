import React from "react";
import useTheme from "../../../Hooks/useTheme";

const PopularClass = ({ item }) => {
	const { _id, img, name, price, seats, students } = item;
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`${
				isDarkMode
					? "md:flex items-center bg-black shadow-xl rounded-2xl"
					: "md:flex items-center bg-base-100 shadow-xl rounded-2xl"
			}`}>
			<img
				className="md:w-[325px] md:h-[325px] rounded-t-xl md:rounded-s-xl md:rounded-tr-none"
				src={img}
				alt="Album"
			/>
			<div
				className={`${
					isDarkMode ? "text-white pl-10 py-5 md:py-0" : "pl-10 py-5 md:py-0"
				}`}>
				<h2 className="card-title font-inter">Name of Class: {name}</h2>
				<h3 className="text-[18px] font-inter">
					Price: <span className={`${isDarkMode?"text-[#F08E00]":"text-[#F08E00]"}`}>${price}</span>
				</h3>
				<p className="text-[18px] font-inter">Available Seats: {seats}</p>
				<p className="text-[18px] font-inter">Number of Students: {students}</p>
			</div>
		</div>
	);
};

export default PopularClass;
