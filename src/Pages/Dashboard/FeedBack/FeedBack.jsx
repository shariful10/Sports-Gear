import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

const FeedBack = () => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<div className="w-full">
			<Helmet>
				<title>Sports Gear | Feedback</title>
			</Helmet>
			<SectionTitle heading={"Feedback"} />
			<div className="my-container">
				<form onSubmit={handleSubmit(onSubmit)}>
					<textarea
						className="textarea textarea-bordered w-full h-[250px] font-inter font-medium"
						name="feedback"
						{...register("feedback", { required: true })}
						placeholder="Write Your Feedback Here..."></textarea>
					{errors.feedback && <span className="text-red-600">Feedback is required</span>}
					<input
						className="btn-feed mt-5 text-center"
						type="submit"
						value="Submit Feedback"
					/>
				</form>
			</div>
		</div>
	);
};

export default FeedBack;
