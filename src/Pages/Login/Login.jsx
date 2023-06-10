import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
	const [showPass, setShowPass] = useState(false);

	return (
		<div className="my-container md:flex justify-center items-center gap-6 my-[50px] md:my-[80px]">
			<img className="md:w-1/2" src="https://i.ibb.co/HYJpvz5/login.jpg" alt="" />
			<div className="md:w-1/2">
				<form className="bg-white shadow-2xl rounded p-[50px] mb-4">
					<h2 className="text-[50px] mb-[50px] text-center font-cinzel font-bold">
						Please Login!
					</h2>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Email"
						/>
					</div>
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
							id="password"
							type={showPass ? "text" : "password"}
							placeholder="Password"
						/>
					</div>
					<div className="text-center">
						<button className="btn-submit" type="submit">
							Login
						</button>
					</div>
					<p className="text-center my-5 font-inter font-medium">
						Don't Have An Account?{" "}
						<Link to="/signup">
							<span className="underline text-blue-700 font-semibold">Sign Up</span>
						</Link>
					</p>
				<SocialLogin />
				</form>
			</div>
		</div>
	);
};

export default Login;
