import useGetOrders from "../api/useGetOrders.ts";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";
import OrderCard from "../../../widgets/OrderCard/OrderCard.tsx";
import {useState} from "react";
import {Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent} from "@mui/material";
import {statusMapping} from "../../../../server/types/statusMapping.ts";

const OrdersPage = () => {
    const {orders, loading} = useGetOrders();
    const [statusFilter, setStatusFilter] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof statusMapping>) => {
        const {
            target: { value },
        } = event;
        setStatusFilter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log(statusFilter);
    };

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <Grid container spacing={2}>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Фильтр по статусу заказа</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={statusFilter}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Фильтр по статусу заказа" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value, index) => (
                                <Chip key={index} label={value} />
                            ))}
                        </Box>
                    )}
                    variant={"outlined"}
                >
                    {statusMapping.map((status, index) => (
                        <MenuItem
                            key={index}
                            value={status}
                        >
                            {status}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {orders.map(order => (
                <Grid key={order.id} size={{xs: 12, sm: 6, md: 4}}>
                    <OrderCard order={order}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default OrdersPage;