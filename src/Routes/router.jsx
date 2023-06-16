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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

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
				element: (
					<StudentRoute>
						<MySelectedClasses />
					</StudentRoute>
				),
			},
			{
				path: "addclass",
				element: (
					<InstructorRoute>
						<AddClass />
					</InstructorRoute>
				),
			},
			{
				path: "myclasses",
				element: (
					<InstructorRoute>
						<MyClasses />
					</InstructorRoute>
				),
			},
			{
				path: "users",
				element: (
					<AdminRoute>
						<ManageUsers />
					</AdminRoute>
				),
			},
			{
				path: "classes",
				element: (
					<AdminRoute>
						<ManageClasses />
					</AdminRoute>
				),
			},
			{
				path: "feedback",
				element: (
					<AdminRoute>
						<FeedBack />
					</AdminRoute>
				),
			},
		],
	},
]);
