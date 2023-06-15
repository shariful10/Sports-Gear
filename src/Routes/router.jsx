import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../Pages/Dashboard/SelectedClasses/MySelectedClasses";
import AddClass from "../Pages/Dashboard/AddClasses/AddClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import FeedBack from "../Pages/Dashboard/FeedBack/FeedBack";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/instructor",
				element: <Instructor />,
			},
			{
				path: "/classes",
				element: <Classes />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: "selected",
				element: <MySelectedClasses />,
			},
			{
				path: "addclass",
				element: <AddClass />,
			},
			{
				path: "myclasses",
				element: <MyClasses />,
			},
			{
				path: "users",
				element: <ManageUsers />,
			},
			{
				path: "classes",
				element: <ManageClasses />,
			},
			{
				path: "feedback",
				element: <FeedBack />,
			},
		],
	},
]);
