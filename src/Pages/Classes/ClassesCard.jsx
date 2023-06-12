import React, { useState } from "react";

const ClassesCard = ({ singleClass }) => {
	const { _id, img, name, price, ins_name, seats } = singleClass;

	const handleSelect = (item) => {
		console.log(item);
	};

	return (
		<div className="card w-full bg-base-100 shadow-xl">
			<img className="rounded-t-2xl h-[300px] w-full" src={img} alt="Shoes" />
			<div
				className={`card-body ${seats === 0 ? "bg-red-800 rounded-b-2xl text-white" : ""}`}>
				<h2 className="text-xl font-semibold font-inter">
					Class Name: <span className="text-[16px] font-medium">{name}</span>
				</h2>
				<p className="text-[16px] font-inter font-medium"> Instructor Name: {ins_name}</p>
				<p className="text-[16px] font-inter font-medium">Available Seats: {seats}</p>
				<p className="text-[18px] font-inter font-medium">
					Price: <span className="text-[#F08E00]">${price}</span>
				</p>
				<div className="card-actions justify-end">
					<button
						onClick={() => handleSelect(singleClass)}
						title={`${seats === 0 ? "Seat Not Available" : ""}`}
						className={`${
							seats === 0
								? "disabled bg-gray-400 text-xl text-white font-inter font-medium py-4 px-5 rounded-lg cursor-not-allowed"
								: "text-xl text-white bg-[#F08E00] hover:bg-blue-700 font-inter font-medium py-4 px-5 rounded-lg"
						}`}>
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClassesCard;
