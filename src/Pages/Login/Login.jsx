import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin";
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";

const Login = () => {
	const [showPass, setShowPass] = useState(false);
	const { signIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const { isDarkMode } = useTheme();

	const from = location.state?.from?.pathname || "/";

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		signIn(data.email, data.password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: "Successfully Login",
					showConfirmButton: false,
					timer: 1500,
				});
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					position: "top-center",
					icon: "error",
					title: "Something Went Wrong! Please Try Again",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<div className="my-container md:flex justify-center items-center gap-6 py-[50px] md:py-[80px]">
			<Helmet>
				<title>Sports Gear | Login</title>
			</Helmet>
			<img
				className={`md:w-1/2 shadow-2xl ${isDarkMode ? "bg-black" : ""}`}
				src="https://i.ibb.co/3TPbZLF/sign-up.png"
				alt=""
			/>
			<div className="md:w-1/2">
				<div
					className={`shadow-2xl rounded p-[50px] mb-4 ${
						isDarkMode ? "bg-black text-white" : "bg-white"
					}`}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className="text-[50px] mb-[20px] text-center font-cinzel font-bold">
							Please Login!
						</h2>
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
							{errors.email && <span className="text-red-600">Name is required</span>}
						</div>
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
								id="password"
								type={showPass ? "text" : "password"}
								{...register("password", { required: true, minLength: 6 })}
								placeholder="Password"
							/>
							{errors.password?.type === "required" && (
								<p className="text-red-600">Password is required</p>
							)}
							{errors.password?.type === "minLength" && (
								<p className="text-red-600">Password must be 6 characters or max</p>
							)}
						</div>
						<div className="text-center">
							<button className="btn-submit" type="submit">
								Login
							</button>
						</div>
						<p className="text-center my-5 font-inter font-medium">
							Don't Have An Account?{" "}
							<Link to="/signup">
								<span className="underline text-[#F08E00] font-semibold">
									Sign Up
								</span>
							</Link>
						</p>
					</form>
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default Login;
