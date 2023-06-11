import React from "react";

const PopularClass = ({ item }) => {
	const { _id, img, name, price, desc } = item;
	return (
		<div className="card lg:card-side bg-base-100 shadow-xl">
			<img
				className="md:w-[265px] md:h-[265px] rounded-t-md md:rounded-s-md md:rounded-tr-none"
				src={img}
				alt="Album"
			/>
			<div className="card-body">
				<h2 className="card-title">Name of Class: {name}</h2>
				<h3 className="text-xl">Price: ${price}</h3>
				<p>{desc}</p>
				<div className="card-actions justify-end">
					<button className="btn-error">Select</button>
				</div>
			</div>
		</div>
	);
};

export default PopularClass;
