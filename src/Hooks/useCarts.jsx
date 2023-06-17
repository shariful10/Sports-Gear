import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useCarts = () => {
	const { user } = useAuth();

	const {
		data: carts = [],
		refetch,
		isLoading: loading,
	} = useQuery({
		queryKey: ["carts"],
		queryFn: async () => {
			const res = await fetch(
				`https://sports-gear-server-shariful10.vercel.app/carts/${user?.email}`
			);
			return res.json();
		},
	});

	return [carts, refetch, loading];
};

export default useCarts;
