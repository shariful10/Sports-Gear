import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {
	const { user, logOut } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
					to="/instructors"
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
			<li>
				<NavLink
					to="/dashboard"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Dashboard
				</NavLink>
			</li>
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
					className="text-[16px] tracking-wide text-white transition-colors duration-200 uppercase hover:text-blue-500 font-inter font-semibold">
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
					to="/instructors"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Instructors
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/classes"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Classes
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/dashboard"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/signup"
					className={({ isActive }) => (isActive ? "mobileActive" : "mobileDefault")}>
					Sign Up
				</NavLink>
			</li>
			{user ? (
				<button className="text-[16px] tracking-wide text-black transition-colors duration-200 uppercase hover:text-blue-500 font-inter font-semibold">
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
		<div className="w-full bg-black">
			<div className="relative flex items-center justify-between my-container px-4 lg:px-8">
				<Link to="/">
					<h2 className="text-2xl md:text-[32px] font-black text-white py-[16px] md:py-[32px]">
						Sports Gear
					</h2>
				</Link>
				<ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>
				{user && (
					<img
						className="h-10 w-10 rounded-full"
						title={user?.displayName}
						src={user?.photoURL}
						alt=""
					/>
				)}
				{/* Mobile Navbar */}
				<div className="lg:hidden">
					{/* Dropdown Open Button */}
					<button
						aria-label="Open Menu"
						title="Open Menu"
						onClick={() => setIsMenuOpen(true)}>
						<HiMenuAlt3 className="h-6 w-6 text-white hover:text-[#eefa6c] focus:text-[#eefa6c]" />
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-10">
							<div className="p-4 bg-white border rounded shadow-sm">
								<div className="flex items-center justify-between mb-4">
									{/* Logo & Button section */}
									<div>
										<Link to="/" className="lg:hidden">
											<h2 className="text-2xl font-black text-black">
												Sports Gear
											</h2>
										</Link>
									</div>
									{/* Dropdown menu close button */}
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											onClick={() => setIsMenuOpen(false)}>
											<HiOutlineX className="h-6 w-6 text-black hover:text-[#eefa6c] focus:text-[#eefa6c]" />
										</button>
									</div>
								</div>
								{/* Mobile Nav Items Section */}
								<nav>
									<ul className="space-y-4">{mobNavItems}</ul>
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
