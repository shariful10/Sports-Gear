import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await fetch("http://localhost:5000/users");
		return res.json();
	});

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | Manage Users</title>
			</Helmet>
			<SectionTitle heading={"Manage Users"} />
			<div className="my-container">
				<h2 className="text-[50px] font-cinzel font-bold text-center">
					Total Users: {users.length}
				</h2>

				<div className="relative overflow-x-auto md:px-96 mt-5">
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
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr
									key={user._id}
									className="bg-white border-b dark:border-gray-700">
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{index + 1}
									</th>
									<td className="px-6 py-4 font-inter">{user.name}</td>
									<td className="px-6 py-4 font-inter">{user.email}</td>
									<td className="py-4 font-inter">
										<div className="flex gap-6">
											<button className="btn-role">
												Make Admin
											</button>
											<button className="btn-ins">
												Make Instructor
											</button>
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
