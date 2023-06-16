import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";

const MySelectedClasses = () => {

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | My Selected Classes</title>
			</Helmet>
			<SectionTitle heading={"My Selected Classes"} />
            <div className="my-container">
                <h2>My Selected Classes</h2>
            </div>
		</div>
	);
};

export default MySelectedClasses;
