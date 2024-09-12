import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { statusMapping } from "../../../server/types/statusMapping.ts";

interface FilterProps {
  selected: string[];
  setSelected: (selected: string[]) => void;
}

const OrdersFilter = ({ selected, setSelected }: FilterProps) => {
  const handleChange = (event: SelectChangeEvent<typeof statusMapping>) => {
    const {
      target: { value },
    } = event;
    setSelected(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ maxWidth: 300 }}>
      <InputLabel id="demo-multiple-chip-label">
        Фильтр по статусу заказа
      </InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selected}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label="Фильтр по статусу заказа"
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value, index) => (
              <Chip key={index} label={value} />
            ))}
          </Box>
        )}
        variant={"outlined"}
      >
        {statusMapping.map((status, index) => (
          <MenuItem key={index} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OrdersFilter;
