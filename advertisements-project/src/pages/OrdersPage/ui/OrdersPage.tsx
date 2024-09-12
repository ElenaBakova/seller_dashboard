import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";

import useGetOrders from "../api/useGetOrders.ts";
import { Order } from "../../../../server/types/types.ts";
import { statusMapping } from "../../../../server/types/statusMapping.ts";
import OrderCard from "../../../widgets/OrderCard/OrderCard.tsx";
import OrdersFilter from "../../../widgets/Filters/OrdersFilter.tsx";
import OrdersSorting from "../../../widgets/Sorting/OrdersSorting.tsx";

const OrdersPage = () => {
  const { orders, loading } = useGetOrders();
  const [statusFilter, setStatusFilter] = useState<string[]>(statusMapping);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [sortingOrder, setSortingOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    if (orders) {
      setFilteredOrders(orders);
    }
  }, [orders]);

  useEffect(() => {
    if (orders) {
      setFilteredOrders(
        orders.filter((order) =>
          statusFilter.includes(statusMapping[order.status]),
        ),
      );
    }
  }, [statusFilter, orders]);

  useEffect(() => {
    const sorted = filteredOrders.sort((a, b) => {
      switch (sortingOrder) {
        case "asc":
          return a.total - b.total;
        case "desc":
          return b.total - a.total;
      }
    });
    setFilteredOrders(sorted);
  }, [filteredOrders, sortingOrder]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      <Grid container flexDirection="column" spacing={4}>
        <OrdersSorting
          sortingOrder={sortingOrder}
          setSortingOrder={setSortingOrder}
        />

        <OrdersFilter selected={statusFilter} setSelected={setStatusFilter} />
      </Grid>

      {filteredOrders.map((order) => (
        <Grid key={order.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <OrderCard order={order} />
        </Grid>
      ))}
    </Grid>
  );
};

export default OrdersPage;
