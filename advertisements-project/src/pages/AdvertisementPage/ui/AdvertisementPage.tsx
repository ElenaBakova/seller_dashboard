import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid2";
import {CircularProgress, Typography} from "@mui/material";

import getAdvertisement from "../api/getAdvertisement.ts";

import Likes from "../../../shared/ui/Likes";
import Views from "../../../shared/ui/Views";
import Price from "../../../shared/ui/Price";

const AdvertisementPage = () => {
    const {id} = useParams();
    const {advertisement, loading} = getAdvertisement(id as string);

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Grid container spacing={2} direction="row">
            <img src={advertisement.imageUrl || "/no-image.png"} alt={advertisement.name}></img>
            <Grid container spacing={2} direction="column">
                <Typography component="p" color={"secondary"} fontWeight="bold" fontSize={16}>
                    {advertisement.name}
                </Typography>
                <Likes likesCount={advertisement.likes}/>
                <Views viewsCount={advertisement.views}/>
                <Price price={advertisement.price}/>
            </Grid>
        </Grid>
    );
};

export default AdvertisementPage;