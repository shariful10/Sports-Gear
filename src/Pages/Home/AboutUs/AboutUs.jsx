import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useTheme from "../../../Hooks/useTheme";

const AboutUs = () => {
	const isDarkMode = useTheme();
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [0, 2]);

	return (
		<div className="md:flex gap-6 items-center py-[50px] md:py-[130px]">
			<motion.div
				className="container mx-auto"
				style={{
					scale,
				}}>
				<img
					className="w-1/2 md:w-1/3 mx-auto rounded-2xl"
					src="https://i.ibb.co/9HLJ4BD/building.jpg"
					alt=""
				/>
				<motion.div
					className="item"
					style={{
						scaleY: scrollYProgress,
					}}
				/>
			</motion.div>
			<div className="md:w-1/2 pt-24">
				<h2
					className='text-[40px] font-cinzel font-bold text-center'>
					About Us
				</h2>
				<p className='text-left'>
					Sports Gear is a premier cricket training center dedicated to enhancing your
					cricketing abilities. With experienced coaches and top-notch facilities, we
					provide comprehensive coaching for players of all ages and skill levels. Improve
					your batting, bowling, and fielding techniques in a supportive and engaging
					environment. Join us at Sports Gear and take your cricket skills to new heights!
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
