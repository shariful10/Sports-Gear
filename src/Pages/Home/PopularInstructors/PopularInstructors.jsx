import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularInsrtructor from "./PopularInsrtructor";

const PopularInstructors = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch("instructors.json")
			.then((res) => res.json())
			.then((data) => {
				const popularInstructors = data.filter((item) => item.category === "popular");
				setInstructors(popularInstructors);
			});
	}, []);

	return (
		<section>
			<SectionTitle
				heading={"Popular Instructors"}
				subheading={
					"Unlock greatness at our sports training center. Our popular instructors offer strength, speed, and sport-specific training. Expert instructors. Personalized attention. Elevate your game. Join us now."
				}
			/>
			<div className="grid md:grid-cols-3 gap-6 mb-[50px]">
				{instructors.slice(0, 6).map((item) => (
					<PopularInsrtructor key={item._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default PopularInstructors;
