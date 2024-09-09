import {useNavigate, useParams} from "react-router-dom";
import getAdvertisement from "../api/getAdvertisement.ts";
import routesConfig from "../../../app/routes/config.ts";
import {Box, Button, CircularProgress, InputAdornment, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";


const AdvertisementEditPage = () => {
    const {id} = useParams();
    const {advertisement, loading} = getAdvertisement(id as string);

    // @ts-ignore
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (advertisement) {
            setFormData({
                name: advertisement.name,
                description: advertisement.description || '',
                price: advertisement.price,
                imageUrl: advertisement.imageUrl || ''
            });
        }
    }, [advertisement]);

    const handleSaveClick = () => {
        const route = routesConfig["editAdvertisement"].path;
        navigate(route.replace(':id', advertisement.id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseInt(value) : value,
        }));
    };

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Box sx={{padding: 2}}>
            <Typography variant="h6">Редактировать объявление</Typography>
            <Box component="form" sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <TextField
                    label="Название"
                    name="name"
                    value={advertisement.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Цена"
                    type="number"
                    name="price"
                    value={advertisement.price}
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
                    value={advertisement.description}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                />
                <TextField
                    label="URL изображения"
                    name="imageUrl"
                    value={advertisement.imageUrl}
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