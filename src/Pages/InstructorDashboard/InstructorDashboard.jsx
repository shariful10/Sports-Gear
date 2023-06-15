import React from "react";
import { NavLink } from "react-router-dom";

const InstructorDashboard = () => {
	return (
		<div>
			<li>
				<NavLink to="/dashboard/addclass">ADD A CLASS</NavLink>
			</li>
			<li>
				<NavLink to="/dashboard/myclasses">MY CLASSES</NavLink>
			</li>
		</div>
	);
};

export default InstructorDashboard;
