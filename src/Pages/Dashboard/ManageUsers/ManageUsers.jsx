import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";

const ManageUsers = () => {
	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | Manage Users</title>
			</Helmet>
			<SectionTitle heading={"Manage Users"} />
		</div>
	);
};

export default ManageUsers;
