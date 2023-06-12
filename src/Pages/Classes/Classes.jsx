import React from "react";
import SectionCover from "../../Components/SectionCover";
import { Helmet } from "react-helmet-async";
import useClasses from "../../Hooks/useClasses";
import ClassesCard from "./ClassesCard";

const Classes = () => {
	const [classes] = useClasses();

	return (
		<div className="contaier mx-auto">
			<Helmet>
				<title>Sports Gear | Classes</title>
			</Helmet>
			<SectionCover heading={"Classes"} />
			<div className="grid md:grid-cols-4 gap-6 my-[50px]">
				{classes.map((singleClass) => (
					<ClassesCard key={singleClass._id} singleClass={singleClass} />
				))}
			</div>
		</div>
	);
};

export default Classes;
