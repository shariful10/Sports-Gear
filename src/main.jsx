import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Pages/Providers/AuthProvider.jsx";
import { ThemeProvider } from "./Pages/Providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider>
				<HelmetProvider>
					<RouterProvider router={router}>
						<Toaster position="top-center" reverseOrder={false} />
					</RouterProvider>
				</HelmetProvider>
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
);
