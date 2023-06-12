import React, { useEffect, useState } from 'react';

const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("instructors.json")
			.then((res) => res.json())
			.then((data) => {
				setInstructors(data);
				setLoading(false);
			});
	}, []);

    return [instructors, loading];
};

export default useInstructors;