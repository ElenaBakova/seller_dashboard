import '../../shared/styles/styles.css'
import {Box, Button, Modal, Typography} from "@mui/material";
import {useState} from "react";

const CreateAdvertisementModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Добавить объявление</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box className={"modalWindow"}>
                    <Typography id="items-list" variant="h6" component="h2">
                        Создание объявления
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateAdvertisementModal;