import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
	return (
		<div>
			<div className="divider font-inter text-blue-700">Or Sign In With</div>
			<div className="text-center">
				<button className="btn-outline text-blue-700 border border-blue-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white font-bold py-4 px-[80px] rounded font-inter mt-5">
					<div className="flex justify-center items-center gap-4">
						<FaGoogle />
						Sign In With Google
					</div>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
