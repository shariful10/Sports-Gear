import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
	const { createUser } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPass, setShowPass] = useState(false);
	const [showConfifm, setShowConfifm] = useState(false);

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
            Swal.fire({
				position: "top-center",
				icon: "success",
				title: "Sign Up Successful",
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};

	return (
		<div className="my-container md:flex justify-center items-center gap-6 my-[50px] md:my-[80px]">
			<Helmet>
				<title>Sports Gear | Sign Up</title>
			</Helmet>
			<img className="md:w-1/2" src="https://i.ibb.co/HYJpvz5/login.jpg" alt="" />
			<div className="md:w-1/2">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white shadow-2xl rounded p-[50px] mb-4">
					<h2 className="text-[50px] mb-[20px] text-center font-cinzel font-bold">
						Please Sign Up!
					</h2>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email">
							Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="name"
							{...register("name", { required: true })}
							placeholder="Name"
						/>
						{errors.name && <span className="text-red-600">Name is required</span>}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="email"
							{...register("email", { required: true })}
							placeholder="Email"
						/>
						{errors.email && <span className="text-red-600">Email is required</span>}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email">
							Photo URL
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="url"
							{...register("url", { required: true })}
							placeholder="Email"
						/>
						{errors.url && <span className="text-red-600">Photo URL is required</span>}
					</div>
					<div className="grid md:grid-cols-2 gap-4">
						<div className="mb-6">
							<div className="flex justify-between items-center">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
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
								<p className="text-red-600">Password must be 6 characters or max</p>
							)}
							{errors.password?.type === "maxLength" && (
								<p className="text-red-600">
									Password must be less than 20 characters
								</p>
							)}
							{errors.password?.type === "pattern" && (
								<p className="text-red-600">
									Password must have one uppercase, one lowercase, one number and
									one special character
								</p>
							)}
						</div>
						<div className="mb-6">
							<div className="flex justify-between items-center">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
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
								<p className="text-red-600">Password must be 6 characters or max</p>
							)}
							{errors.confirm?.type === "maxLength" && (
								<p className="text-red-600">
									Password must be less than 20 characters
								</p>
							)}
							{errors.confirm?.type === "pattern" && (
								<p className="text-red-600">
									Password must have one uppercase, one lowercase, one number and
									one special character
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
							<span className="underline text-blue-700 font-semibold">Login</span>
						</Link>
					</p>
					<SocialLogin />
				</form>
			</div>
		</div>
	);
};

export default SignUp;
