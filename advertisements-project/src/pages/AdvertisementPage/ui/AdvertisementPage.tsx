import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { Button, CircularProgress, Divider, Typography } from "@mui/material";

import useGetAdvertisement from "../api/useGetAdvertisement.ts";

import Likes from "../../../shared/ui/Likes";
import Views from "../../../shared/ui/Views";
import Price from "../../../shared/ui/Price";
import routesConfig from "../../../app/routes/config.ts";

const AdvertisementPage = () => {
  const { id } = useParams();
  const { advertisement, loading } = useGetAdvertisement(id as string);

  const navigate = useNavigate();

  const handleEditAdvertisementClick = () => {
    const route = routesConfig["editAdvertisement"].path;
    navigate(route.replace(":id", advertisement.id));
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid className={"pageContent"} sx={{ m: 4, py: 3, px: 12 }}>
      <Grid container direction="column" spacing={4}>
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={handleEditAdvertisementClick}
        >
          Редактировать объявление
        </Button>

        <Grid container direction="row" spacing={5}>
          <Grid size={5}>
            <img
              height="550"
              width="550"
              src={advertisement.imageUrl || "/no-image.png"}
              alt={advertisement.name}
            />
          </Grid>

          <Grid size={7}>
            <Typography variant="h3" color={"secondary"} fontWeight="bold">
              {advertisement.name}
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={"16px"}
              color="textSecondary"
              width={"70%"}
            >
              {advertisement.description}
            </Typography>

            <Divider sx={{ my: 3, width: "70%" }} />

            <Grid container flexDirection="column" spacing={2}>
              <Price
                price={advertisement.price}
                fontSize="1.5rem"
                bold={true}
              />
              <Likes likesCount={advertisement.likes} fontSize="1.3rem" />
              <Views viewsCount={advertisement.views} fontSize="1.3rem" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdvertisementPage;
