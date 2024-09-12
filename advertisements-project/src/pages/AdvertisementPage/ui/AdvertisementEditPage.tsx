import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import saveChanges from "../api/saveChanges.ts";
import useGetAdvertisement from "../api/useGetAdvertisement.ts";
import routesConfig from "../../../app/routes/config.ts";
import Grid from "@mui/material/Grid2";

const AdvertisementEditPage = () => {
  const { id } = useParams();
  const { advertisement, loading } = useGetAdvertisement(id as string);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (advertisement) {
      setFormData({
        name: advertisement.name,
        description: advertisement.description || "",
        price: advertisement.price,
        imageUrl: advertisement.imageUrl || "",
      });
    }
  }, [advertisement]);

  const handleSaveClick = async () => {
    try {
      const newData = {
        ...advertisement,
        name: formData.name,
        description: formData.description,
        price: formData.price,
        imageUrl: formData.imageUrl,
      };
      await saveChanges(newData);
      const route = routesConfig["advertisement"].path;
      navigate(route.replace(":id", advertisement.id), { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseInt(value) || 0 : value,
    }));
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid
      container
      spacing={3}
      flexDirection="column"
      className={"pageContent"}
      sx={{ alignContent: "center", padding: 4 }}
    >
      <Typography variant="h5">Редактирование объявления</Typography>
      <Grid
        container
        direction="row"
        spacing={3}
        component="form"
        autoComplete="off"
        width="60%"
        margin="auto"
      >
        <TextField
          label="Название"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Цена"
          name="price"
          value={formData.price}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">₽</InputAdornment>,
            },
          }}
        />
        <TextField
          label="Описание"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label="URL изображения"
          name="imageUrl"
          type="url"
          value={formData.imageUrl || ""}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" onClick={handleSaveClick}>
          Сохранить изменения
        </Button>
      </Grid>
    </Grid>
  );
};

export default AdvertisementEditPage;
