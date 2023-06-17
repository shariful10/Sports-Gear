import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import useTheme from "../../../Hooks/useTheme";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
	const { isDarkMode } = useTheme();
	const [carts, refetch] = useCart();
	console.log(carts);

	const handleDelete = (select) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://sports-gear-server-shariful10.vercel.app/carts/${select._id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						refetch();
						if (data.deletedCount === 1) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
						}
					});
			}
		});
	};

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
								Student Email
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
								<td className="px-6 py-4 font-inter text-blue-500 font-bold">
									${select.price}
								</td>
								<td className="px-6 py-4 font-inter">{select.seats}</td>
								<td className="py-4 font-inter">
									<button
										onClick={() => handleDelete(select)}
										className="btn btn-square btn-outline text-red-700 hover:bg-red-700 hover:border-red-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="#FF0000"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</td>
								<td className="py-4 font-inter">
									<button
										onClick={() => handleDelete(select)}
										className="btn btn-outline bg-blue-700 hover:bg-blue-500 hover:border-blue-500 text-white">
										Pay Now
									</button>
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
