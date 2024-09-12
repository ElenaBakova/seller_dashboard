import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";

import useGetOrders from "../api/useGetOrders.ts";
import { Order } from "../../../../server/types/types.ts";
import { statusMapping } from "../../../../server/types/statusMapping.ts";
import OrderCard from "../../../widgets/OrderCard/OrderCard.tsx";
import OrdersFilter from "../../../widgets/Filters/OrdersFilter.tsx";
import OrdersSorting from "../../../widgets/Sorting/OrdersSorting.tsx";
import PaginationControls from "../../../widgets/Pagination/PaginationControls.tsx";
import { Box, SelectChangeEvent } from "@mui/material";
import PaginationSizeSelector from "../../../widgets/Pagination/PaginationSizeSelector.tsx";

const OrdersPage = () => {
  const { orders, loading } = useGetOrders();
  const [statusFilter, setStatusFilter] = useState<string[]>(statusMapping);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [sortingOrder, setSortingOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;

  const handleOrdersPerPageChange = (event: SelectChangeEvent) => {
    setOrdersPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

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
    setCurrentPage(1);
    setFilteredOrders(sorted);
  }, [filteredOrders, sortingOrder]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ flexGrow: 1 }} flexDirection="column" className={"pageContent"}>
      <Grid container flexDirection="row" spacing={2}>
        <Grid container size={3} flexDirection="column" spacing={3}>
          <OrdersSorting
            sortingOrder={sortingOrder}
            setSortingOrder={setSortingOrder}
          />

          <OrdersFilter selected={statusFilter} setSelected={setStatusFilter} />

          <PaginationSizeSelector
            cardsPerPage={ordersPerPage}
            handleCardsPerPageChange={handleOrdersPerPageChange}
          />
        </Grid>

        <Grid container spacing={3} size={9}>
          {filteredOrders
            .slice(firstOrderIndex, lastOrderIndex)
            .map((order) => (
              <Grid
                key={order.id}
                sx={{
                  maxWidth: "300px",
                  maxHeight: "250px",
                  flex: "1 0 auto",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <OrderCard order={order} />
              </Grid>
            ))}
        </Grid>
      </Grid>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default OrdersPage;
