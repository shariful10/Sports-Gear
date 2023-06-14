import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useTheme from "../../../Hooks/useTheme";

const AddClass = () => {
	const { isDarkMode } = useTheme();

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | Add Class</title>
			</Helmet>
			<SectionTitle heading={"Add A Class"} />
			<div
				className={`shadow-2xl rounded p-[50px] mb-4 my-container ${
					isDarkMode ? "bg-black text-white" : "bg-white"
				}`}>
				<form>
					<div className="grid md:grid-cols-2 gap-6 mb-4">
						<div>
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="name">
								Class Name
							</label>
							<input
								className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 focus:border-[3px] border-black focus:border-blue-600"
								type="name"
								placeholder="Class Name"
							/>
						</div>
						<div>
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="name">
								Instructor Name
							</label>
							<input
								className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 focus:border-[3px] border-black focus:border-blue-600"
								type="name"
								placeholder="Instructor Name"
							/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6 mb-4">
						<div>
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="url">
								Photo URL
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="url"
								placeholder="Photo URL"
							/>
						</div>
						<div>
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="email">
								Instructor email
							</label>
							<input
								className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 focus:border-[3px] border-black focus:border-blue-600"
								type="email"
								placeholder="Instructor Email"
							/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="mb-6">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="seats">
								Available Seats
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="Available Seats"
							/>
						</div>
						<div className="mb-6">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="number">
								Price
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="Price"
							/>
						</div>
					</div>
					<div className="text-center">
						<button className="btn-add" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddClass;
