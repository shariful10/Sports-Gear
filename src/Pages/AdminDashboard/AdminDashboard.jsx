import React from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
	return (
		<div>
			<li>
				<NavLink to="/dashboard/classes">MANAGE CLASSES</NavLink>
			</li>
			<li>
				<NavLink to="/dashboard/users">MANAGE USERS</NavLink>
			</li>
		</div>
	);
};

export default AdminDashboard;
