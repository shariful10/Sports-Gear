import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
	return (
		<div className="pt-5 md:pt-[50px]">
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
				<SwiperSlide>
					<div className="bg-cricket bg-no-repeat bg-cover bg-center rounded-2xl">
						<div className="bg-[#03030347] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Bating Practice
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Cricket Coaching Center: Elevate your game with expert coaching, state-of-the-art facilities, and a passion for football. Perfect potential at our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-fielding bg-no-repeat bg-cover bg-bottom text-white rounded-2xl">
						<div className="bg-[#03030347] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Fielding Practice
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Cricket Coaching Center: Elevate your game with expert coaching, state-of-the-art facilities, and a passion for football. Perfect potential at our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-women bg-no-repeat bg-cover bg-center rounded-2xl">
						<div className="bg-[#03030372] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Women's Cricket
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Cricket Coaching Center: Elevate your game with expert coaching, state-of-the-art facilities, and a passion for football. Perfect potential at our premier training center.
							</p>
							<button className="btn-error mt-5">Learn More</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-bowling bg-no-repeat bg-cover bg-center rounded-2xl">
						<div className="bg-[#03030347] text-white md:px-[80px] md:py-[250px] py-[80px] px-6 rounded-2xl">
							<h2 className="text-4xl md:text-[50px] font-cinzel font-bold">
								Bowling Training
							</h2>
							<p className="text-[16px] font-inter md:w-1/2 my-5">
								Sports Gear Cricket Coaching Center: Elevate your game with expert coaching, state-of-the-art facilities, and a passion for football. Perfect potential at our premier training center.
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
