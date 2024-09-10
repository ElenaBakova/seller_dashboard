import {useNavigate, useParams} from "react-router-dom";
import Grid from "@mui/material/Grid2";
import {Button, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";

import useGetAdvertisement from "../api/useGetAdvertisement.ts";

import Likes from "../../../shared/ui/Likes";
import Views from "../../../shared/ui/Views";
import Price from "../../../shared/ui/Price";
import routesConfig from "../../../app/routes/config.ts";

const AdvertisementPage = () => {
    const {id} = useParams();
    const {advertisement, loading} = useGetAdvertisement(id as string);

    const navigate = useNavigate();

    const handleEditAdvertisementClick = () => {
        const route = routesConfig["editAdvertisement"].path;
        navigate(route.replace(':id', advertisement.id));
    }

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Grid sx={{py: 3, px: 12}}>
            <Grid container direction="column" spacing={4}>
                <Button variant="contained" color="secondary" onClick={handleEditAdvertisementClick}>
                    Редактировать объявление
                </Button>
                <Grid sx={{xs: 12, md: 6}}>
                    <CardMedia
                        component="img"
                        height="550"
                        src={advertisement.imageUrl || "/no-image.png"}
                        alt={advertisement.name}
                    />

                    <CardContent>
                        <Typography variant="h5" color={"secondary"} fontWeight="bold">
                            {advertisement.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {advertisement.description}
                        </Typography>
                        <Likes likesCount={advertisement.likes}/>
                        <Views viewsCount={advertisement.views}/>
                        <Price price={advertisement.price}/>
                    </CardContent>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdvertisementPage;

