import React from "react";

const PopularClass = ({ item }) => {
	const { _id, img, name, price, seats, students } = item;
	return (
		<div className="md:flex items-center bg-base-100 shadow-xl rounded-2xl">
			<img
				className="md:w-[325px] md:h-[325px] rounded-t-xl md:rounded-s-xl md:rounded-tr-none"
				src={img}
				alt="Album"
			/>
			<div className="pl-10 py-5 md:py-0">
				<h2 className="card-title font-inter">Name of Class: {name}</h2>
				<h3 className="text-[18px] font-inter">Price: ${price}</h3>
				<p className="text-[18px] font-inter">Available Seats: {seats}</p>
				<p className="text-[18px] font-inter">Number of Students: {students}</p>
			</div>
		</div>
	);
};

export default PopularClass;
