import React, { useEffect, useState } from "react";
import SectionCover from "../../Components/SectionCover";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch("instructors.json")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);

	return (
		<div className="px-4 md:px-0">
			<SectionCover heading={"Instructor"} />
			<div className="grid md:grid-cols-4 gap-6 my-[50px]">
				{instructors.map((instructor) => (
					<InstructorCard key={instructor._id} instructor={instructor} />
				))}
			</div>
		</div>
	);
};

export default Instructor;
