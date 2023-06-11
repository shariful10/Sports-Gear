import React from "react";

const PopularInsrtructor = ({ item }) => {
    const {image, name, experience, total_students} = item;

	return (
		<div className="card w-full bg-base-100 shadow-xl">
			<img className="rounded-t-2xl h-[400px]" src={image} alt="Shoes" />
			<div className="card-body">
				<h2 className="card-title font-inter">Name: {name}</h2>
				<p className="text-[18px] font-inter">Experience: {experience} Years</p>
				<p className="text-[18px] font-inter">Number of Students: {total_students}</p>
			</div>
		</div>
	);
};

export default PopularInsrtructor;
