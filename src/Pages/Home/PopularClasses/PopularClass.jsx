import React from "react";

const PopularClass = ({ item }) => {
	const { _id, img, name, price, desc, students } = item;
	return (
		<div className="card lg:card-side bg-base-100 shadow-xl">
			<img
				className="md:w-[325px] md:h-[325px] rounded-t-xl md:rounded-s-xl md:rounded-tr-none"
				src={img}
				alt="Album"
			/>
			<div className="card-body">
				<h2 className="card-title font-inter">Name of Class: {name}</h2>
				<h3 className="text-xl font-inter">Price: ${price}</h3>
				<p className="text-xl font-inter">Number of Students: {students}</p>
				<p className="text-xl font-inter">{desc}</p>
				<div className="card-actions justify-end">
					<button className="btn-error font-inter">Select</button>
				</div>
			</div>
		</div>
	);
};

export default PopularClass;
