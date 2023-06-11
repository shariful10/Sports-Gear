import React from "react";

const InstructorCard = ({ instructor }) => {
	const { image, name, email, Classes_number, classes_taken, total_students } = instructor;

	return (
		<div className="card w-full bg-base-100 shadow-xl">
			<img className="rounded-t-2xl h-[300px] w-full" src={image} alt="Shoes" />
			<div className="card-body">
				<h2 className="card-title font-inter">Name: {name}</h2>
				<p className="text-[16px] font-inter">Email: {email}</p>
			</div>
		</div>
	);
};

export default InstructorCard;
