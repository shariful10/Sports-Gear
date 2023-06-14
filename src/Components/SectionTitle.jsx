import React from "react";
import useTheme from "../Hooks/useTheme";
import { Slide } from "react-awesome-reveal";

const SectionTitle = ({ heading, subheading }) => {
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`${
				isDarkMode
					? "text-center my-[50px] md:mt-20 text-white"
					: "text-center my-[50px] md:mt-20"
			}`}>
			<Slide animate={"backInRight"}>
				<h2 className="text-[40px] font-cinzel font-bold pb-3 border-b-4 w-4/5 md:w-4/12 mx-auto border-[#F08E00]">
					{heading}
				</h2>
			</Slide>
			<p className="text-[16px] font-inter font-medium md:w-1/2 mx-auto mt-10">
				{subheading}
			</p>
		</div>
	);
};

export default SectionTitle;
