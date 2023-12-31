import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "./../Pages/Shared/Footer";
import useTheme from "../Hooks/useTheme";

const Main = () => {
	const { isDarkMode } = useTheme();

	return (
		<div>
			<NavBar />
			<div className={`min-h-[calc(100vh-448.073px)] ${isDarkMode ? "bg-[#201f1f]" : ""}`}>
				<div className="my-container px-5 md:px-0">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
