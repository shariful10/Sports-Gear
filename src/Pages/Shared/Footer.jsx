import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

	return (
		<div className="bg-black">
			<div className="my-container py-[30px] md:py-[50px]">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-0">
					<div className="">
						<h3 className="text-2xl text-blue-700 font-cinzel font-bold mb-5">Address</h3>
						<p className="text-[16px] font-inter text-white">MK Neer, Road- 108,</p>
						<p className="text-[16px] font-inter text-white">
							Dhanmondi, Dhaka, Bangladesh
						</p>
					</div>
					<div className="">
						<h3 className="text-2xl text-blue-700 font-cinzel font-bold mb-5">
							Quick Links
						</h3>
						<Link to="/">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Home
							</p>
						</Link>
						<Link to="/instructors">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Instructors
							</p>
						</Link>
						<Link to="/classes">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Classes
							</p>
						</Link>
						<Link to="/dashboard">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Dashboard
							</p>
						</Link>
					</div>
					<div className="">
						<h3 className="text-2xl text-blue-700 font-cinzel font-bold mb-5">Support</h3>
						<p className="text-[16px] font-inter text-white hover:text-blue-700">
							Support Center
						</p>
						<p className="text-[16px] font-inter text-white hover:text-blue-700">
							Feedback
						</p>
						<p className="text-[16px] font-inter text-white hover:text-blue-700">
							Accesbility
						</p>
					</div>
					<div className="">
						<h3 className="text-2xl text-blue-700 font-cinzel font-bold mb-5">
							Follow Us
						</h3>
						<Link to="https://www.facebook.com/">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Facebook
							</p>
						</Link>
						<Link to="https://twitter.com">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Twitter
							</p>
						</Link>
						<Link to="https://www.instagram.com/">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								Instagram
							</p>
						</Link>
						<Link to="https://www.linkedin.com/">
							<p className="text-[16px] font-inter text-white hover:text-blue-700">
								LinkedIn
							</p>
						</Link>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<p className="text-[16px] font-medium text-white text-center font-inter">
					© {currentYear} Sports Gear. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
