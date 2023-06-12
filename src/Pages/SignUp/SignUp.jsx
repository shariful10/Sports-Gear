import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";

const SignUp = () => {
	const { createUser, updateUserProfile } = useAuth();
	const navigate = useNavigate();

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPass, setShowPass] = useState(false);
	const [showConfifm, setShowConfifm] = useState(false);
	const { isDarkMode } = useTheme();

	const onSubmit = (data) => {
		console.log(data);
		if (data.password !== data.confirm) {
			Swal.fire({
				position: "top-center",
				icon: "error",
				title: "Password and Confirm Password Must Be Match!",
				showConfirmButton: false,
				timer: 1500,
			});
			return;
		}
		createUser(data.email, data.password).then((res) => {
			const loggedUser = res.user;
			console.log(loggedUser);
			updateUserProfile(data.name, data.url)
				.then(() => {
					console.log("Updated user profile");
					reset();
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Sign Up Successful",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/");
				})
				.catch((err) => {
					console.log(err);
					Swal.fire({
						position: "top-center",
						icon: "error",
						title: "Something Went Wrong",
						showConfirmButton: false,
						timer: 1500,
					});
				});
		});
	};

	return (
		<div className="my-container md:flex justify-center items-center gap-6 py-[50px] md:py-[80px]">
			<Helmet>
				<title>Sports Gear | Sign Up</title>
			</Helmet>
			<img className="md:w-1/2 shadow-2xl" src="https://i.ibb.co/HYJpvz5/login.jpg" alt="" />
			<div className="md:w-1/2">
				<div
					className={`shadow-2xl rounded p-[50px] mb-4 ${
						isDarkMode ? "bg-black text-white" : "bg-white"
					}`}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className="text-[50px] mb-[20px] text-center font-cinzel font-bold">
							Please Sign Up!
						</h2>
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="email">
								Name
							</label>
							<input
								className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-2 focus:border-[3px] border-black focus:border-blue-600"
								type="name"
								{...register("name", { required: true })}
								placeholder="Name"
							/>
							{errors.name && <span className="text-red-600">Name is required</span>}
						</div>
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="email">
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="email"
								{...register("email", { required: true })}
								placeholder="Email"
							/>
							{errors.email && (
								<span className="text-red-600">Email is required</span>
							)}
						</div>
						<div className="mb-4">
							<label
								className={`block text-sm font-bold mb-2 ${
									isDarkMode ? "text-white" : "text-gray-700"
								}`}
								htmlFor="email">
								Photo URL
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="url"
								{...register("url", { required: true })}
								placeholder="Email"
							/>
							{errors.url && (
								<span className="text-red-600">Photo URL is required</span>
							)}
						</div>
						<div className="grid md:grid-cols-2 gap-4">
							<div className="mb-6">
								<div className="flex justify-between items-center">
									<label
										className={`block text-sm font-bold mb-2 ${
											isDarkMode ? "text-white" : "text-gray-700"
										}`}
										htmlFor="password">
										Password
									</label>
									<span onClick={() => setShowPass(!showPass)}>
										{showPass ? <FaEyeSlash /> : <FaEye />}
									</span>
								</div>
								<input
									className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									type={showPass ? "text" : "password"}
									{...register("password", {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
									})}
									placeholder="Password"
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-600">Password is required</p>
								)}
								{errors.password?.type === "minLength" && (
									<p className="text-red-600">
										Password must be 6 characters or max
									</p>
								)}
								{errors.password?.type === "maxLength" && (
									<p className="text-red-600">
										Password must be less than 20 characters
									</p>
								)}
								{errors.password?.type === "pattern" && (
									<p className="text-red-600">
										Password must have one uppercase, one lowercase, one number
										and one special character
									</p>
								)}
							</div>
							<div className="mb-6">
								<div className="flex justify-between items-center">
									<label
										className={`block text-sm font-bold mb-2 ${
											isDarkMode ? "text-white" : "text-gray-700"
										}`}
										htmlFor="password">
										Confirm Password
									</label>
									<span onClick={() => setShowConfifm(!showConfifm)}>
										{showConfifm ? <FaEyeSlash /> : <FaEye />}
									</span>
								</div>
								<input
									className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									type={showConfifm ? "text" : "password"}
									{...register("confirm", {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
									})}
									placeholder="Confirm Password"
								/>
								{errors.confirm?.type === "required" && (
									<p className="text-red-600">Password is required</p>
								)}
								{errors.confirm?.type === "minLength" && (
									<p className="text-red-600">
										Password must be 6 characters or max
									</p>
								)}
								{errors.confirm?.type === "maxLength" && (
									<p className="text-red-600">
										Password must be less than 20 characters
									</p>
								)}
								{errors.confirm?.type === "pattern" && (
									<p className="text-red-600">
										Password must have one uppercase, one lowercase, one number
										and one special character
									</p>
								)}
							</div>
						</div>
						<div className="text-center">
							<button className="btn-submit" type="submit">
								Sign Up
							</button>
						</div>
						<p className="text-center my-5 font-inter font-medium">
							Already Have An Account?{" "}
							<Link to="/login">
								<span className="underline text-[#F08E00] font-semibold">Login</span>
							</Link>
						</p>
					</form>
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default SignUp;
