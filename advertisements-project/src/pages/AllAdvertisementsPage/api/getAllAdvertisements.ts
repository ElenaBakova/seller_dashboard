import {Advertisment} from "../../../../server/types/types.ts";
import {useEffect, useState} from "react";

const GetAllAdvertisements = () => {
    const [advertisements, setAdvertisements] = useState<Advertisment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllAdvertisements = async () => {
            fetch('http://localhost:3000/advertisements')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdvertisements(data)
                    setLoading(false);
                })
                .catch(err => console.error('An error occured while fetching advertisements:', err));
        }

        fetchAllAdvertisements();
    }, []);

    return {advertisements, loading};
};

export default GetAllAdvertisements;