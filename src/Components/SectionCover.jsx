import React from "react";

const SectionCover = ({ heading }) => {
	return (
		<div className="bg-topBanner bg-cover bg-no-repeat bg-center mt-5 md:mt-[50px] rounded-2xl">
			<div className="bg-[#00000078] py-[50px] md:py-[100px] rounded-2xl">
				<h2 className="text-[30px] md:text-[80px] font-cinzel font-bold text-center text-white">
					{heading}
				</h2>
			</div>
		</div>
	);
};

export default SectionCover;
