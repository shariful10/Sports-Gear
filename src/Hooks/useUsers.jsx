import { useEffect, useState } from "react";

const useUsers = () => {
	const [users, setusers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://sports-gear-server.vercel.app/users")
			.then((res) => res.json())
			.then((data) => {
				setusers(data);
				setLoading(false);
			});
	}, []);

	return [users, loading];
};

export default useUsers;
