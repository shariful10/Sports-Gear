import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import useTheme from "../../../Hooks/useTheme";

const MySelectedClasses = () => {
	const { isDarkMode } = useTheme();
	const [carts] = useCart();
	console.log(carts);

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | My Selected Classes</title>
			</Helmet>
			<SectionTitle heading={"My Selected Classes"} />
			<div className="relative overflow-x-auto md:px-60 my-10">
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
								Email
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Price
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Available Seats
							</th>
							<th scope="col" className="px-8 py-3 font-inter">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{carts.map((select, index) => (
							<tr
								key={select._id}
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
										src={select.image}
										alt=""
									/>
								</td>
								<td className="px-6 py-4 font-inter">{select.name}</td>
								<td className="px-6 py-4 font-inter">{select.email}</td>
								<td className="px-6 py-4 font-inter">${select.price}</td>
								<td className="px-6 py-4 font-inter">{select.seats}</td>
								<td className="py-4 font-inter">
									<div className="flex gap-6">
										{select.role === "instructor" ? (
											<span className="text-[#f08e00] font-inter font-medium">
												Instructor
											</span>
										) : (
											<button className="btn-ins">Delete</button>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MySelectedClasses;
