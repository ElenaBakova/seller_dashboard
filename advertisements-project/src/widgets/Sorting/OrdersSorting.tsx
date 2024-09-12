import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface OrdersSortingProps {
  sortingOrder: "asc" | "desc";
  setSortingOrder: (order: "asc" | "desc") => void;
}

const OrdersSorting = ({
  sortingOrder,
  setSortingOrder,
}: OrdersSortingProps) => {
  return (
    <Box sx={{ maxWidth: "fit-content" }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Сортировка</InputLabel>
        <Select
          variant="outlined"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortingOrder}
          label="Age"
          onChange={(e) => setSortingOrder(e.target.value as "asc" | "desc")}
        >
          <MenuItem value={"asc"}>Сумма больше</MenuItem>
          <MenuItem value={"desc"}>Сумма меньше</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrdersSorting;
