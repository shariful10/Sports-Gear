import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const AddClass = () => {
	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | Add Class</title>
			</Helmet>
			<SectionTitle heading={"Add A Class"} />
		</div>
	);
};

export default AddClass;
