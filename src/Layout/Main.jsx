import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import { Footer } from "flowbite-react";

const Main = () => {
	return (
		<div>
			<NavBar />
			<div className="min-h-[calc(100vh-448.073px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
