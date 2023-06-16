import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useTheme from "../../../Hooks/useTheme";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddClass = () => {
	const { isDarkMode } = useTheme();
	const { user } = useAuth();
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

		const { name, price, email, instructor, seats, url, status } = data;
		const newItem = {
			name,
			email,
			price: parseFloat(price),
			seats: parseFloat(seats),
			instructor,
			image: url,
			status,
		};
		console.log(newItem);
		fetch("https://sports-gear-server.vercel.app/classes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					reset();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Successfully Add Class",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				Swal.fire({
					position: "top-center",
					icon: "error",
					title: "Something went wrong",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

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
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="mb-4">
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
								{...register("name", { required: true })}
								placeholder="Class Name"
							/>
							{errors.name && <span className="text-red-600">Name is required</span>}
						</div>
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="name">
								Instructor Name
							</label>
							<input
								className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 focus:border-[3px] border-black focus:border-blue-600"
								readOnly
								type="name"
								{...register("instructor", { required: true })}
								defaultValue={user?.displayName}
								placeholder="Instructor Name"
							/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="mb-4">
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
								{...register("url", { required: true })}
								placeholder="Photo URL"
							/>
							{errors.url && (
								<span className="text-red-600">Photo URL is required</span>
							)}
						</div>
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="email">
								Instructor email
							</label>
							<input
								className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 focus:border-[3px] border-black focus:border-blue-600"
								readOnly
								type="email"
								{...register("email", { required: true })}
								defaultValue={user?.email}
								placeholder="Instructor Email"
							/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="mb-4">
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
								{...register("seats", { required: true })}
								placeholder="Available Seats"
							/>
							{errors.seats && (
								<span className="text-red-600">Seats is required</span>
							)}
						</div>
						<div className="mb-4">
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
								{...register("price", { required: true })}
								placeholder="Price"
							/>
							{errors.price && (
								<span className="text-red-600">Price is required</span>
							)}
						</div>
					</div>
					<div className="mb-4">
						<label
							className={`block text-sm font-bold mb-2 ${
								isDarkMode ? "text-white" : "text-gray-700"
							}`}
							htmlFor="number"></label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden"
							type="text"
							{...register("status", { required: true })}
							defaultValue={"Pending"}
							placeholder="Status"
						/>
					</div>
					<div className="text-center">
						<button className="btn-add" type="submit">
							Add Class
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddClass;
