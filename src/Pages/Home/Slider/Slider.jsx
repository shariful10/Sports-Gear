import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
	return (
		<div className=" mt-5 md:mt-[50px]">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				<SwiperSlide>
					<div className="bg-cricket bg-no-repeat bg-cover bg-center rounded-2xl">
						<div className="bg-[#03030347] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Cricket Training
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Cricket Coaching Center: Elevate your game with expert
								coaching, state-of-the-art facilities, and a passion for football.
								Perfect your skills, build teamwork, and unlock your potential at
								our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-football bg-no-repeat bg-cover bg-bottom text-white rounded-2xl">
						<div className="bg-[#03030347] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								FootBall Training
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Football Coaching Center: Elevate your game with expert
								coaching, state-of-the-art facilities, and a passion for football.
								Perfect your skills, build teamwork, and unlock your potential at
								our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-batminton bg-no-repeat bg-cover bg-center rounded-2xl">
						<div className="bg-[#03030372] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Batminton Training
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Batminton Coaching Center: Elevate your game with expert
								coaching, state-of-the-art facilities, and a passion for football.
								Perfect your skills, build teamwork, and unlock your potential at
								our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-hokey bg-no-repeat bg-cover bg-center rounded-2xl">
						<div className="bg-[#03030347] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Hokey Training
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Hokey Coaching Center: Elevate your game with expert
								coaching, state-of-the-art facilities, and a passion for football.
								Perfect your skills, build teamwork, and unlock your potential at
								our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
