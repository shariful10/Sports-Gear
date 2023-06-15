import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import useTheme from "../../../Hooks/useTheme";
import { Link } from "react-router-dom";

const ManageClasses = () => {
	const [classes] = useClasses();
	const { isDarkMode } = useTheme();
	const classStatus = classes.filter((item) => item.status === "Pending");

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | Manage Classes</title>
			</Helmet>
			<SectionTitle heading={"Manage Classes"} />
			<div className="my-container">
				<h2
					className={`text-[50px] font-cinzel font-bold text-center ${
						isDarkMode ? "text-white" : ""
					}`}>
					Total Classes: {classStatus.length}
				</h2>

				<div className="relative overflow-x-auto mt-5 my-container">
					<table className="w-full text-sm text-left text-gray-500">
						<thead className="text-xs text-white uppercase bg-blue-600">
							<tr>
								<th scope="col" className="px-6 py-3 font-inter">
									No.
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Class Image
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Class Name
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Instructor name
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Instructor Email
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Available Seats
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Price
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Status
								</th>
								<th scope="col" className="px-8 py-3 font-inter">Status</th>
								<th scope="col" className="px-8 py-3 font-inter">Status</th>
							</tr>
						</thead>
						<tbody>
							{classStatus.map((item, index) => (
								<tr
									key={item._id}
									className={`border-b ${
										isDarkMode ? "border-white bg-black text-white" : "bg-white"
									}`}>
									<th
										scope="row"
										className={`px-6 py-4 font-medium ${
											isDarkMode ? "text-white" : "text-gray-900"
										} whitespace-nowrap`}>
										{index + 1}
									</th>
									<td className="px-6 py-4">
										<img
											className="h-[100px] w-[100px] rounded-lg shadow-2xl"
											src={item.image}
											alt=""
										/>
									</td>
									<td className="px-6 py-4 font-inter">{item.name}</td>
									<td className="px-6 py-4 font-inter">{item.instructor}</td>
									<td className="px-6 py-4 font-inter">{item.email}</td>
									<td className="px-6 py-4 font-inter">{item.seats}</td>
									<td className="px-6 py-4 font-inter font-bold text-blue-700">
										${item.price}
									</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											{item.status === "Pending" ? (
												<span className="text-[#f08e00] font-inter font-medium">
													Pending
												</span>
											) : (
												<button
													onClick={() => handleMakePending(user)}
													className="btn-ins">
													Pending
												</button>
											)}
										</div>
									</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											{item.status === "Approved" ? (
												<span className="text-blue-700 font-inter font-medium">
													Approved
												</span>
											) : (
												<button
													onClick={() => handleMakeApproved(user)}
													className="btn-role">
													Approved
												</button>
											)}
										</div>
									</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											{item.status === "Instructor" ? (
												<span className="text-red-600 font-inter font-medium">
													Denied
												</span>
											) : (
												<Link to="">
													<button
														onClick={() => handleMakeDenied(user)}
														className="btn-denied">
														Denied
													</button>
												</Link>
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageClasses;
