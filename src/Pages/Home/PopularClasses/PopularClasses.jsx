import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularClass from "./PopularClass";
import useClasses from "../../../Hooks/useClasses";

const PopularClasses = () => {
	const [classes] = useClasses();
	const popular = classes.filter((item) => item.category === "popular");

	return (
		<section>
			<SectionTitle
				heading={"Popular Classes"}
				subheading={
					"Unlock greatness at our sports training center. Our popular classes offer strength, speed, and sport-specific training. Expert instructors. Personalized attention. Elevate your game. Join us now."
				}
			/>
			<div className="grid md:grid-cols-2 gap-6">
				{popular.slice(0, 6).map((item) => (
					<PopularClass key={item._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default PopularClasses;
