import {useEffect, useState} from "react";
import {Advertisment} from "../../../../server/types/types.ts";

const useGetAdvertisement = (id: string) => {
    const [advertisement, setAdvertisement] = useState<Advertisment>({
        createdAt: "",
        description: "",
        imageUrl: "",
        likes: 0,
        name: "",
        price: 0,
        views: 0,
        id: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdvertisement = async () => {
            fetch(`http://localhost:3000/advertisements/${id}`)
                .then(res => res.json())
                .then(data => {
                    setLoading(false);
                    setAdvertisement(data);
                })
                .catch(error => console.error('An error occurred while fetching advertisement:', error));
        }

        fetchAdvertisement();
    }, [id]);

    return {advertisement, loading};
}

export default useGetAdvertisement;