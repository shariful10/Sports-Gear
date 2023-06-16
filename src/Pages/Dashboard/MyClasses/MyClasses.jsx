import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useTheme from "../../../Hooks/useTheme";

const MyClasses = () => {
	const { isDarkMode } = useTheme();

	const { data: classes = [], refetch } = useQuery(["classes"], async () => {
		const res = await fetch("http://localhost:5000/classes");
		return res.json();
	});

	const pendingStatus = classes.filter((item) => item.status === "Pending");
	const approvedStatus = classes.filter((item) => item.status === "Approved");
	const deniedStatus = classes.filter((item) => item.status === "Denied");

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | My Classes</title>
			</Helmet>
			<SectionTitle heading={"My Classes"} />
			<div className="relative overflow-x-auto my-8 my-container md:px-20">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-white uppercase bg-blue-600">
						<tr>
							<th scope="col" className="px-8 py-3 font-inter">
								Class Image
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Class Name
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Available Seats
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Price
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Total Enrolled Students
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Status
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Feedback
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Update
							</th>
						</tr>
					</thead>
					<tbody>
						{approvedStatus.map((item) => (
							<tr
								key={item._id}
								className={`border-b ${
									isDarkMode ? "border-white bg-black text-white" : "bg-white"
								}`}>
								<th className="px-6 py-4">
									<img
										className="h-[100px] w-[100px] rounded-lg shadow-2xl"
										src={item.image}
										alt=""
									/>
								</th>
								<td className="px-8 py-4 font-inter">{item.name}</td>
								<td className="px-8 py-4 font-inter">{item.seats}</td>
								<td className="px-8 py-4 font-inter font-bold text-blue-700">
									${item.price}
								</td>
								<td className="px-8 py-4 font-inter">
									{item?.enrolled ? item?.enrolled : 0}
								</td>
								<td className="px-8 py-4 font-inter">{item.status}</td>
								<td className="px-8 py-4 font-inter"></td>
								<td className="px-8 py-4 font-inter">
									<button className="btn-role">Update</button>
								</td>
							</tr>
						))}
						{deniedStatus.map((item) => (
							<tr
								key={item._id}
								className={`border-b ${
									isDarkMode ? "border-white bg-black text-white" : "bg-white"
								}`}>
								<th className="px-6 py-4">
									<img
										className="h-[100px] w-[100px] rounded-lg shadow-2xl"
										src={item.image}
										alt=""
									/>
								</th>
								<td className="px-8 py-4 font-inter">{item.name}</td>
								<td className="px-8 py-4 font-inter">{item.seats}</td>
								<td className="px-8 py-4 font-inter font-bold text-blue-700">
									${item.price}
								</td>
								<td className="px-8 py-4 font-inter">
									{item?.enrolled ? item?.enrolled : 0}
								</td>
								<td className="px-8 py-4 font-inter">{item.status}</td>
								<td className="px-8 py-4 font-inter">{item.feedback}</td>
								<td className="px-8 py-4 font-inter">
									<button className="btn-role">Update</button>
								</td>
							</tr>
						))}
						{pendingStatus.map((item) => (
							<tr
								key={item._id}
								className={`border-b ${
									isDarkMode ? "border-white bg-black text-white" : "bg-white"
								}`}>
								<th className="px-6 py-4">
									<img
										className="h-[100px] w-[100px] rounded-lg shadow-2xl"
										src={item.image}
										alt=""
									/>
								</th>
								<td className="px-8 py-4 font-inter">{item.name}</td>
								<td className="px-8 py-4 font-inter">{item.seats}</td>
								<td className="px-8 py-4 font-inter font-bold text-blue-700">
									${item.price}
								</td>
								<td className="px-8 py-4 font-inter">
									{item?.enrolled ? item?.enrolled : 0}
								</td>
								<td className="px-8 py-4 font-inter">{item.status}</td>
								<td className="px-8 py-4 font-inter"></td>
								<td className="px-8 py-4 font-inter">
									<button className="btn-role">Update</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyClasses;
