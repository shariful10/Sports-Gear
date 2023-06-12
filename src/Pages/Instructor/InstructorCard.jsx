import React from "react";
import useTheme from "../../Hooks/useTheme";

const InstructorCard = ({ instructor }) => {
	const { image, name, email } = instructor;
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`card w-full ${
				isDarkMode ? "bg-black text-white rounded-b-xl" : "bg-base-100"
			} shadow-xl`}>
			<img className="rounded-t-2xl h-[300px] w-full" src={image} alt="Shoes" />
			<div className="card-body">
				<h2 className="card-title font-inter">Name: {name}</h2>
				<p className="text-[16px] font-inter">Email: {email}</p>
			</div>
		</div>
	);
};

export default InstructorCard;
