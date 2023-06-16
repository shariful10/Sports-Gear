import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import useTheme from "../../Hooks/useTheme";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const NavBar = () => {
	const { user, logOut } = useAuth();
	console.log(user);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isDarkMode, handleDarkMode } = useTheme();
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();
	// const isAdmin = true;
	// const isInstructor = false;
	// const isInstructor = true;
	// const isAdmin = false;

	const handleLogout = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.log(err));
	};

	const navItems = (
		<>
			<li>
				<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/instructor"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Instructors
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/classes"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Classes
				</NavLink>
			</li>
			{user && (
				<li>
					<NavLink
						to={`${
							isAdmin
								? "/dashboard/classes"
								: isInstructor
								? "/dashboard/addclass"
								: "/dashboard/selected"
						}`}
						className={({ isActive }) => (isActive ? "active" : "default")}>
						Dashboard
					</NavLink>
				</li>
			)}
			<li>
				<NavLink
					to="/signup"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Sign Up
				</NavLink>
			</li>
			{user ? (
				<button
					onClick={handleLogout}
					className="text-[16px] tracking-wide text-white transition-colors duration-200 hover:text-blue-500 font-inter font-semibold">
					Log Out
				</button>
			) : (
				<li>
					<NavLink
						to="/login"
						className={({ isActive }) => (isActive ? "active" : "default")}>
						Login
					</NavLink>
				</li>
			)}
		</>
	);

	const mobNavItems = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : "mobileDefault")}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/instructor"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Instructor
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/classes"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Classes
				</NavLink>
			</li>
			{user && (
				<li>
					<NavLink
						to={`${
							isAdmin
								? "/dashboard/users"
								: isInstructor
								? "/dashboard/addclass"
								: "/dashboard/selected"
						}`}
						className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
						Dashboard
					</NavLink>
				</li>
			)}
			<li>
				<NavLink
					to="/signup"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Sign Up
				</NavLink>
			</li>
			{user ? (
				<button className="text-[16px] tracking-wide text-[#F08E00] transition-colors duration-200 hover:text-blue-500 font-inter font-semibold">
					Log Out
				</button>
			) : (
				<li>
					<NavLink
						to="/login"
						className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
						Login
					</NavLink>
				</li>
			)}
		</>
	);

	return (
		<div className={`w-full sticky top-0 z-50 ${isDarkMode ? "bg-black" : "bg-gray-500"}`}>
			<div className="relative flex items-center justify-between my-container px-5 md:px-0">
				<Link to="/">
					<img
						className="py-[16px] w-5/6 md:w-full"
						src="https://i.ibb.co/BKfVTmQ/sportsgear.png"
						alt=""
					/>
				</Link>
				<ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>
				<div className="flex items-center gap-6 md:gap-4 mr-[75px] md:mr-0">
					{user && (
						<img
							className="h-12 w-12 rounded-full"
							title={user?.displayName}
							src={user?.photoURL}
							alt=""
						/>
					)}
					<button
						onClick={handleDarkMode}
						className={`${
							isDarkMode ? "p-3 rounded-full bg-white" : "p-3 rounded-full bg-black"
						}`}>
						{!isDarkMode ? (
							<BsFillMoonStarsFill className="h-6 w-6 text-white" />
						) : (
							<BsFillSunFill className="h-6 w-6 text-black" />
						)}
					</button>
				</div>
				{/* Mobile Navbar */}
				<div className="lg:hidden">
					{/* Dropdown Open Button (Mobile) */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}>
						<HiMenuAlt3 className="h-8 w-8 text-[#f8a831] hover:text-blue-500 focus:text-blue-500" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div
								className={`p-4 border rounded shadow-sm ${
									isDarkMode
										? "bg-black border-black"
										: "bg-gray-500 border-gray-500"
								}`}>
								<div className="flex items-center justify-between mb-4">
									<div>
										<Link to="/">
											<img
												className="py-[10px] w-4/6 md:w-full"
												src="https://i.ibb.co/BKfVTmQ/sportsgear.png"
												alt=""
											/>
										</Link>
									</div>
									{/* Dropdown menu close button (Mobile) */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className=""
											onClick={() => setIsMenuOpen(false)}>
											<HiOutlineX className="h-8 w-8 text-[#f8a831] hover:text-blue-500 focus:text-blue-500" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4 pb-4">{mobNavItems}</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
