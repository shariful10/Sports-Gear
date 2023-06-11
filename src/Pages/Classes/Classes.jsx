import React from "react";
import SectionCover from "../../Components/SectionCover";
import { Helmet } from "react-helmet-async";

const Classes = () => {
	return (
		<div>
			<Helmet>
				<title>Sports Gear | Classes</title>
			</Helmet>
			<SectionCover heading={"Classes"} />
		</div>
	);
};

export default Classes;
