import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
	const { googleSignIn } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const handleGoogleSignIn = () => {
		googleSignIn()
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
		<div>
			<div className="divider font-inter text-blue-700 font-semibold">Or Sign In With</div>
			<div className="text-center">
				<button className="btn-outline text-blue-700 border border-blue-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white font-bold py-4 px-[80px] rounded font-inter mt-5">
					<div
						onClick={handleGoogleSignIn}
						className="flex justify-center items-center gap-4">
						<FaGoogle />
						Sign In With Google
					</div>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
