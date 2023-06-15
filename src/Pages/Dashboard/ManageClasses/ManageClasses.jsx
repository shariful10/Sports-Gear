import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useTheme from "../../../Hooks/useTheme";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
	const { isDarkMode } = useTheme();

	const { data: classes = [], refetch } = useQuery(["classes"], async () => {
		const res = await fetch("http://localhost:5000/classes");
		return res.json();
	});

	const pendingStatus = classes.filter((item) => item.status === "Pending");
	const approvedStatus = classes.filter((item) => item.status === "Approved");
	const deniedStatus = classes.filter((item) => item.status === "Denied");

	const handleMakePending = (item) => {
		fetch(`http://localhost:5000/classes/admin/${item._id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "Pending" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${item.name} is Pending Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleMakeApproved = (item) => {
		fetch(`http://localhost:5000/classes/admin/${item._id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "Approved" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${item.name} is Approved Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
					refetch();
				}
			});
	};

	const handleMakeDenied = (item) => {
		fetch(`http://localhost:5000/classes/admin/${item._id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "Denied" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${item.name} is Denied Now!`,
						showConfirmButton: false,
						timer: 1500,
					});
					refetch();
				}
			});
	};

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
					Total Classes: {classes.length}
				</h2>
				<div className="relative overflow-x-auto mt-5 my-container">
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
								<th scope="col" className="px-8 py-3 font-inter">
									Status
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Status
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
													onClick={() => handleMakePending(item)}
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
													onClick={() => handleMakeApproved(item)}
													className="btn-role">
													Approved
												</button>
											)}
										</div>
									</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											{item.status === "Denied" ? (
												<span className="text-red-600 font-inter font-medium">
													Denied
												</span>
											) : (
												<Link to="/dashboard/feedback">
													<button
														onClick={() => handleMakeDenied(item)}
														className="btn-denied">
														Denied
													</button>
												</Link>
											)}
										</div>
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
													onClick={() => handleMakePending(item)}
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
													onClick={() => handleMakeApproved(item)}
													className="btn-role">
													Approved
												</button>
											)}
										</div>
									</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											{item.status === "Denied" ? (
												<span className="text-red-600 font-inter font-medium">
													Denied
												</span>
											) : (
												<Link to="/dashboard/feedback">
													<button
														onClick={() => handleMakeDenied(item)}
														className="btn-denied">
														Denied
													</button>
												</Link>
											)}
										</div>
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
													onClick={() => handleMakePending(item)}
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
													onClick={() => handleMakeApproved(item)}
													className="btn-role">
													Approved
												</button>
											)}
										</div>
									</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											{item.status === "Denied" ? (
												<span className="text-red-600 font-inter font-medium">
													Denied
												</span>
											) : (
												<Link to="/dashboard/feedback">
													<button
														onClick={() => handleMakeDenied(item)}
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
