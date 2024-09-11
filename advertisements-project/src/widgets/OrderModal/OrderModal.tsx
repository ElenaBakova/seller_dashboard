import {useState} from "react";
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Modal, Typography} from "@mui/material";
import {OrderItem} from "../../../server/types/types.ts";
import Price from "../../shared/ui/Price";
import routesConfig from "../../app/routes/config.ts";
import {useNavigate} from "react-router-dom";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface orederItemsProps {
    items: Array<OrderItem>
}

const OrderModal = ({items}: orederItemsProps) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const route = routesConfig["advertisement"].path;
        navigate(route.replace(':id', e.currentTarget.id));
    }

    return (
        <div>
            <Button onClick={handleOpen}>Показать все товары</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="items-list" variant="h6" component="h2">
                        Товары в заказе
                    </Typography>

                    {items ? items.map(item => (
                        <Card key={item.id} sx={{display: "flex", flexDirection: "row"}}>
                            <CardActionArea id={item.id} onClick={handleCardClick}>
                                <CardMedia
                                    component="img"
                                    height="90"
                                    width="90"
                                    image={item.imageUrl || "/no-image.png"}
                                    alt={item.name}/>

                                <CardContent>
                                    <Typography color={"secondary"}>
                                        {item.name}
                                    </Typography>
                                    <Price price={item.price}/>
                                    <Typography>
                                        Количество: {item.count}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )) : <></>}

                </Box>
            </Modal>
        </div>
    );
};

export default OrderModal;