import React from "react";
import useTheme from "../../Hooks/useTheme";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({ singleClass }) => {
	const { user } = useAuth();
	const { _id, image, name, price, ins_name, seats } = singleClass;
	const { isDarkMode } = useTheme();
	const navigate = useNavigate();
	const location = useLocation();

	const handleSelect = (singleClass) => {
		console.log(singleClass);
		if (user && user.email) {
			const classItem = {
				classId: _id,
				name,
				image,
				price,
				ins_name,
				seats,
				email: user.email,
			};
			fetch("https://sports-gear-server-shariful10.vercel.app/carts", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(classItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						// refetch();
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "Selected Class Successfully",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		} else {
			Swal.fire({
				position: "top-center",
				icon: "error",
				title: "You Have to login first",
				showConfirmButton: false,
				timer: 1500,
			});
			navigate("/login", { state: { from: location } });
		}
	};

	return (
		<div
			className={`card w-full shadow-xl ${
				isDarkMode ? "bg-black text-white" : "bg-base-100"
			}`}>
			<img className="rounded-t-2xl h-[300px] w-full" src={image} alt="Shoes" />
			<div
				className={`card-body ${
					seats === 0 ? "bg-red-800 rounded-b-2xl text-white" : ""
				} `}>
				<h2 className="text-xl font-semibold font-inter">
					Class Name: <span className="text-[16px] font-medium">{name}</span>
				</h2>
				<p className="text-[16px] font-inter font-medium"> Instructor Name: {ins_name}</p>
				<p className="text-[16px] font-inter font-medium">Available Seats: {seats}</p>
				<p className="text-[18px] font-inter font-medium">
					Price: <span className="text-[#F08E00]">${price}</span>
				</p>
				<div className="card-actions justify-end">
					<button
						onClick={() => handleSelect(singleClass)}
						title={`${seats === 0 ? "Seat Not Available" : ""}`}
						className={`${
							seats === 0
								? "disabled bg-gray-400 text-xl text-white font-inter font-medium py-4 px-5 rounded-lg cursor-not-allowed"
								: "text-xl text-white bg-[#F08E00] hover:bg-blue-700 font-inter font-medium py-4 px-5 rounded-lg"
						}`}>
						Select
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClassesCard;
