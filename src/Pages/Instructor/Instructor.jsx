import React from "react";
import SectionCover from "../../Components/SectionCover";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";
import useInstructors from "../../Hooks/useInstructors";

const Instructor = () => {
	const [instructors] = useInstructors();

	return (
		<div>
			<Helmet>
				<title>Sports Gear | Instructor</title>
			</Helmet>
			<SectionCover heading={"Instructor"} />
			<div className="grid md:grid-cols-4 gap-6 py-[50px]">
				{instructors.map((instructor) => (
					<InstructorCard key={instructor._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default Instructor;
