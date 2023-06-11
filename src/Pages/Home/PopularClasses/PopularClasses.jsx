import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularClass from "./PopularClass";

const PopularClasses = () => {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		fetch("classes.json")
			.then((res) => res.json())
			.then((data) => {
				const popularClass = data.filter((item) => item.category === "popular");
				setClasses(popularClass);
			});
	}, []);

	return (
		<div>
			<SectionTitle
				heading={"Popular Classes"}
				subheading={
					"Unlock greatness at our sports training center. Our popular classes offer strength, speed, and sport-specific training. Expert instructors. Personalized attention. Elevate your game. Join us now."
				}
			/>
			<div className="grid md:grid-cols-2 gap-6">
				{classes.slice(0, 6).map((item) => (
					<PopularClass key={item._id} item={item} />
				))}
			</div>
		</div>
	);
};

export default PopularClasses;
