import useGetOrders from "../api/useGetOrders.ts";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";
import OrderCard from "../../../widgets/OrderCard/OrderCard.tsx";

const OrdersPage = () => {
    const {orders, loading} = useGetOrders();

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Grid container spacing={2}>
            {orders.map(order => (
                <Grid key={order.id} size={{xs: 12, sm: 6, md: 4}}>
                    <OrderCard order={order}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default OrdersPage;