import React from "react";
import useTheme from "../Hooks/useTheme";

const SectionCover = ({ heading }) => {
	const { isDarkMode } = useTheme();

	return (
		<div className={`${isDarkMode ? "bg-white rounded-2xl" : "bg-[#00000078] rounded-2xl"}`}>
			<div className={`pt-5 md:pt-[50px] ${isDarkMode?'bg-[#201f1f]': 'bg-white'}`}>
				<div className="bg-topBanner bg-cover bg-no-repeat bg-center rounded-2xl pt-5 md:pt-[50px]">
					<div className="py-[50px] md:py-[100px] rounded-2xl">
						<h2
							className={`text-[30px] md:text-[80px] font-cinzel font-bold text-center ${
								isDarkMode ? "text-black" : "text-white"
							}`}>
							{heading}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionCover;
