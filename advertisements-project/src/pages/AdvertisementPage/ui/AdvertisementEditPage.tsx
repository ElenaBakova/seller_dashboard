import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import saveChanges from "../api/saveChanges.ts";
import useGetAdvertisement from "../api/useGetAdvertisement.ts";
import routesConfig from "../../../app/routes/config.ts";

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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Редактирование объявления</Typography>
      <Box
        component="form"
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
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
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Сохранить изменения
        </Button>
      </Box>
    </Box>
  );
};

export default AdvertisementEditPage;
