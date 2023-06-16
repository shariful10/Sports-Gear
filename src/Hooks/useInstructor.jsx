import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
	const { user, loading } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ["isInstructor", user?.email],
		enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
		queryFn: async () => {
			console.log(localStorage.getItem("access-token"));
			const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
			// console.log("is admin response", res);
			console.log(res.data);
			return res.data.instructor;
		},
	});
	return [isInstructor, isInstructorLoading];
};
export default useInstructor;
