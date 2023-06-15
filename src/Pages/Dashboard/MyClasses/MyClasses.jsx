import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const MyClasses = () => {
	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | My Classes</title>
			</Helmet>
			<SectionTitle heading={"My Classes"} />
		</div>
	);
};

export default MyClasses;
