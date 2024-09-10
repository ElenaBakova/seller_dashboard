import {useEffect, useState} from "react";

import {Advertisment} from "../../../../server/types/types.ts";

const useGetAllAdvertisements = () => {
    const [advertisements, setAdvertisements] = useState<Advertisment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllAdvertisements = async () => {
            fetch('http://localhost:3000/advertisements')
                .then(res => res.json())
                .then(data => {
                    setAdvertisements(data);
                    setLoading(false);
                })
                .catch(err => console.error('An error occurred while fetching advertisements:', err));
        }

        fetchAllAdvertisements();
    }, []);

    return {advertisements, loading};
};

export default useGetAllAdvertisements;