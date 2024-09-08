import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import GetAllAdvertisements from "../api/getAllAdvertisements.ts";
import AdvertisementCard from "../../../widgets/AdvertisementCard/AdvertisementCard.tsx";

const AllAdvertisementsPage = () => {
    const {advertisements, loading} = GetAllAdvertisements();

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Grid container spacing={2}>
            {advertisements.map(ad => (
                <Grid key={ad.id} size={{xs: 12, sm: 6, md: 4}}>
                    <AdvertisementCard advertisement={ad}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default AllAdvertisementsPage;