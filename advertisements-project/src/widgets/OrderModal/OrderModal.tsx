import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";

import "../../shared/styles/styles.css";
import Price from "../../shared/ui/Price";

import routesConfig from "../../app/routes/config.ts";
import { OrderItem } from "../../../server/types/types.ts";

interface orderItemsProps {
  items: Array<OrderItem>;
}

const OrderModal = ({ items }: orderItemsProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const route = routesConfig["advertisement"].path;
    navigate(route.replace(":id", e.currentTarget.id));
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Показать все товары</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className={"modalWindow"}>
          <Typography id="items-list" variant="h6" component="h2">
            Товары в заказе
          </Typography>

          {items ? (
            items.map((item) => (
              <Card
                key={item.id}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <CardActionArea id={item.id} onClick={handleCardClick}>
                  <CardMedia
                    component="img"
                    height="90"
                    width="90"
                    image={item.imageUrl || "/no-image.png"}
                    alt={item.name}
                  />

                  <CardContent>
                    <Typography color={"secondary"}>{item.name}</Typography>
                    <Price price={item.price} />
                    <Typography>Количество: {item.count}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          ) : (
            <></>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default OrderModal;
