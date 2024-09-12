import { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import "../../shared/styles/styles.css";

import { getNextId } from "../../shared/lib/nextId.ts";
import createAdvertisement from "./createAdvertisement.ts";
import { Advertisment } from "../../../server/types/types.ts";

const CreateAdvertisementModal = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  const handleSaveClick = async () => {
    try {
      const newData: Advertisment = {
        ...formData,
        id: getNextId(),
        createdAt: new Date().toISOString(),
        views: 0,
        likes: 0,
      };
      await createAdvertisement(newData);
      setOpen(false);
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

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Добавить объявление</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className={"modalWindow"}>
          <Typography id="items-list" variant="h6" component="h2">
            Создание объявления
          </Typography>

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
                  endAdornment: (
                    <InputAdornment position="end">₽</InputAdornment>
                  ),
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
            >
              Сохранить изменения
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateAdvertisementModal;
