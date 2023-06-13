import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="my-container">
			<img className="w-3/5 mx-auto" src="https://i.ibb.co/PDyj9jw/boltu.jpg" alt="" />
			<div className="text-center">
				<Link to="/">
					<button className="text-xl text-white bg-blue-700 hover:bg-[#F08E00] font-inter font-medium py-4 px-5 rounded-lg">
						Back to Home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
