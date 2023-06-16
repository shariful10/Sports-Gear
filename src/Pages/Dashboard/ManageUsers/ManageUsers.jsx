import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useTheme from "../../../Hooks/useTheme";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
	const { isDarkMode } = useTheme();
	const [axiosSecure] = useAxiosSecure();

	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await fetch("https://sports-gear-server.vercel.app/users");
		return res.json();
	});

	const handleMakeAdmin = (user) => {
		axiosSecure.patch(`/users/admin/${user._id}`, { role: "admin" }).then((data) => {
			console.log(data.data);
			if (data.data.modifiedCount) {
				refetch();
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: `${user.name} is an Admin Now!`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	const handleMakeInstructor = (user) => {
		axiosSecure
			.patch(`/users/admin/${user._id}`, { role: "instructor" })

			.then((data) => {
				console.log(data.data);
				if (data.data.modifiedCount) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `${user.name} is an Instructor Now!`,
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
				<title>Sports Gear | Manage Users</title>
			</Helmet>
			<SectionTitle heading={"Manage Users"} />
			<div className="my-container">
				<h2
					className={`text-4xl font-cinzel font-bold text-center ${
						isDarkMode ? "text-white" : ""
					}`}>
					Total Users: {users.length}
				</h2>

				<div className="relative overflow-x-auto md:px-96 my-10">
					<table className="w-full text-sm text-left text-gray-500">
						<thead className="text-xs text-white uppercase bg-blue-600">
							<tr>
								<th scope="col" className="px-6 py-3 font-inter">
									No.
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Name
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Email
								</th>
								<th scope="col" className="px-8 py-3 font-inter">
									Role
								</th>
								<th scope="col" className="px-8 py-3 font-inter"></th>
							</tr>
						</thead>
						<tbody>
							{users?.length > 0 &&
								users.map((user, index) => (
									<tr
										key={user._id}
										className={`border-b ${
											isDarkMode
												? "border-white bg-black text-white"
												: "bg-white"
										}`}>
										<th
											scope="row"
											className={`px-6 py-4 font-medium ${
												isDarkMode ? "text-white" : "text-gray-900"
											} whitespace-nowrap`}>
											{index + 1}
										</th>
										<td className="px-6 py-4 font-inter">{user.name}</td>
										<td className="px-6 py-4 font-inter">{user.email}</td>
										<td className="py-4 font-inter">
											<div className="flex gap-6">
												{user.role === "admin" ? (
													<span className="text-blue-700 font-inter font-medium">
														Admin
													</span>
												) : (
													<button
														onClick={() => handleMakeAdmin(user)}
														className="btn-role">
														Make Admin
													</button>
												)}
											</div>
										</td>
										<td className="py-4 font-inter">
											<div className="flex gap-6">
												{user.role === "instructor" ? (
													<span className="text-[#f08e00] font-inter font-medium">
														Instructor
													</span>
												) : (
													<button
														onClick={() => handleMakeInstructor(user)}
														className="btn-ins">
														Make Instructor
													</button>
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

export default ManageUsers;
