import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useTheme from "../Hooks/useTheme";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { GiClassicalKnowledge } from "react-icons/gi";
import { MdClass } from "react-icons/md";
import { FaHome, FaUserShield, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {
	const { isDarkMode } = useTheme();
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();
	console.log(isAdmin, isInstructor);

	return (
		<div className={`drawer lg:drawer-open ${isDarkMode ? "bg-[#201f1f]" : ""}`}>
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
					<h2 className="text-xl text-[#ff9a01] text-center font-cinzel font-bold my-5">
						{isAdmin
							? "Admin Dashboard"
							: isInstructor
							? "Instructor Dashboard"
							: "Student Dashboard"}
					</h2>
					{isAdmin ? (
						<>
							<li>
								<NavLink to="/dashboard/classes">
									<MdClass className="h-6 w-6" /> MANAGE CLASSES
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/users">
									<FaUsers className="h-6 w-6" /> MANAGE USERS
								</NavLink>
							</li>
						</>
					) : isInstructor ? (
						<>
							<li>
								<NavLink to="/dashboard/addclass">
									<GiClassicalKnowledge className="h-6 w-6" /> ADD A CLASS
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/myclasses">
									<MdClass className="h-6 w-6" /> MY CLASSES
								</NavLink>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to="/dashboard/selected">
									<MdClass className="h-6 w-6" />
									MY SELECTED CLASSES
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/enrolled">
									<GiClassicalKnowledge className="h-6 w-6" />
									MY ENROLLED CLASSES
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/payment">PAYMENT</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/history">PAYMENT HISTORY</NavLink>
							</li>
						</>
					)}

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
						<NavLink to="/">
							<FaHome className="h-6 w-6" />
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink to="/classes">
							<SiGoogleclassroom className="h-6 w-6" />
							CLASSES
						</NavLink>
					</li>
					<li>
						<NavLink to="/instructor">
							<FaUserShield className="h-6 w-6" /> INSTRUCTOR
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
