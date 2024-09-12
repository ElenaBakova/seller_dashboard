import { Order } from "../../../server/types/types.ts";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { statusMapping } from "../../../server/types/statusMapping.ts";
import OrderModal from "../OrderModal/OrderModal.tsx";
import { deliveryMapping } from "../../../server/types/deliveryMapping.ts";

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <Card sx={{ minWidth: 240 }}>
      <CardContent>
        <Typography component="p">
          Товаров в заказе: {order.items.length}
        </Typography>
        <Typography component="p">
          Общая стоимость: {order.total}&nbsp;₽
        </Typography>
        <Typography component="p">
          Дата создания заказа: {formatDate(order.createdAt)}
        </Typography>
        <Typography component="p">{statusMapping[order.status]}</Typography>
        <Typography component="p">
          Доставку осуществляет:{" "}
          {deliveryMapping[order.deliveryWay] || "неизвестно"}
        </Typography>
        <Typography>
          {order.status < 4
            ? "Возможно оформление возврата"
            : "Нельзя оформить возврат"}
        </Typography>
        <Typography component="p">Номер заказа: {order.id}</Typography>
      </CardContent>

      <CardActions>
        <OrderModal items={order.items} />
      </CardActions>
    </Card>
  );
};

export default OrderCard;
