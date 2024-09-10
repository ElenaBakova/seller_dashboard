import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';

import useGetAllAdvertisements from "../api/useGetAllAdvertisements.ts";

import AdvertisementCard from "../../../widgets/AdvertisementCard/AdvertisementCard.tsx";
import {useEffect, useState} from "react";
import {Advertisment} from "../../../../server/types/types.ts";
import {Box} from "@mui/material";
import SearchBar from "../../../widgets/SearchBar/SearchBar.tsx";

const AllAdvertisementsPage = () => {
    const {advertisements, loading} = useGetAllAdvertisements();
    const [filteredAdvertisements, setFilteredAdvertisements] = useState<Advertisment[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (advertisements) {
            setFilteredAdvertisements(advertisements);
        }
    }, [advertisements]);

    useEffect(() => {
        setFilteredAdvertisements(advertisements
            .filter((item) => item.name.toLowerCase().includes(searchQuery))
        );
    }, [searchQuery]);

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Box>
            <SearchBar setSearchQuery={setSearchQuery}/>

            <Grid container spacing={2}>
                {filteredAdvertisements.map(ad => (
                    <Grid key={ad.id} size={{xs: 12, sm: 6, md: 4}}>
                        <AdvertisementCard advertisement={ad}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AllAdvertisementsPage;