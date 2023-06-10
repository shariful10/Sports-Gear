import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
					to="/login"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Login
				</NavLink>
			</li>
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
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Dashboard
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/login"
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Login
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="w-full bg-[#00000080]">
			<div className="relative flex items-center justify-between max-w-screen-xl mx-auto px-4 lg:px-8">
				<Link to="/">
					<h2 className="text-2xl md:text-[32px] font-black text-white py-[16px] md:py-[32px]">
						Sports Gear
					</h2>
				</Link>
				<ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>
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
												BISTRO BOSS
											</h2>
											<h4 className="text-xl font-bold text-black pb-[23px]">
												RESTUARANT
											</h4>
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
