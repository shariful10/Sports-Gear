import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useTheme from "../Hooks/useTheme";

const Dashboard = () => {
	const { isDarkMode } = useTheme();

	return (
		<div className={`drawer lg:drawer-open ${isDarkMode ? "bg-black" : ""}`}>
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				<Outlet />
				<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
					Open drawer
				</label>
			</div>
			<div className="drawer-side bg-blue-700">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80">
					{/* Sidebar content here */}
					<li>
						<NavLink to="/dashboard/manage-users">Manage Users</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/addclass">ADD A CLASS</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/selected">MY SELECTED CLASSES</NavLink>
					</li>
					<li>
						<NavLink to="/enrolled">MY ENROLLED CLASSES</NavLink>
					</li>
					<li>
						<NavLink to="/payment">PAYMENT</NavLink>
					</li>
					<li>
						<NavLink to="/history">PAYMENT HISTORY</NavLink>
					</li>
					<div className="mt-5">
						<hr />
					</div>
					<span className="text-white font-inter font-medium">
						===============================
					</span>
					<div className="mb-5">
						<hr />
					</div>
					<li>
						<NavLink to="/">HOME</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
