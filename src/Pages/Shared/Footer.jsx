import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import useTheme from "../../Hooks/useTheme";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { isDarkMode } = useTheme();

	return (
		<div className={`${isDarkMode ? 'bg-black' : 'bg-gray-500'}`}>
			<div className="my-container py-[30px] md:py-[50px]">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-0">
					<div className="">
						<h3 className="text-2xl text-[#F08E00] font-cinzel font-bold mb-5">
							Address
						</h3>
						<p className="text-[16px] font-inter text-white">MK Neer, Road- 108,</p>
						<p className="text-[16px] font-inter text-white">
							Dhanmondi, Dhaka, Bangladesh
						</p>
					</div>
					<div className="">
						<h3 className="text-2xl text-[#F08E00] font-cinzel font-bold mb-5">
							Quick Links
						</h3>
						<Link to="/">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Home
							</p>
						</Link>
						<Link to="/instructors">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Instructors
							</p>
						</Link>
						<Link to="/classes">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Classes
							</p>
						</Link>
						<Link to="/dashboard">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Dashboard
							</p>
						</Link>
					</div>
					<div className="">
						<h3 className="text-2xl text-[#F08E00] font-cinzel font-bold mb-5">
							Contact Us
						</h3>
						<p className="text-[16px] font-inter text-white hover:text-[#F08E00] flex items-center gap-2">
							<FaPhoneAlt />
							<span>013 542 568 845</span>
						</p>
						<p className="text-[16px] font-inter text-white hover:text-[#F08E00] flex items-center gap-2">
							<FaPhoneAlt />
							<span>013 548 962 741</span>
						</p>
						<p className="text-[16px] font-inter text-white hover:text-[#F08E00] flex items-center gap-2">
							<FaEnvelope />
							<span>sports@help.com</span>
						</p>
					</div>
					<div className="">
						<h3 className="text-2xl text-[#F08E00] font-cinzel font-bold mb-5">
							Follow Us
						</h3>
						<Link to="https://www.facebook.com/">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Facebook
							</p>
						</Link>
						<Link to="https://twitter.com">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Twitter
							</p>
						</Link>
						<Link to="https://www.instagram.com/">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								Instagram
							</p>
						</Link>
						<Link to="https://www.linkedin.com/">
							<p className="text-[16px] font-inter text-white hover:text-[#F08E00]">
								LinkedIn
							</p>
						</Link>
					</div>
				</div>
				<hr className="my-6 border-[#F08E00] sm:mx-auto dark:border-gray-700 lg:my-8" />
				<p className="text-[16px] font-medium text-white text-center font-inter">
					© {currentYear} Sports Gear. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
