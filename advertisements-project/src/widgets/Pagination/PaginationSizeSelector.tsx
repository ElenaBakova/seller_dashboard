import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

interface PaginationSizeProps {
  cardsPerPage: number;
  handleCardsPerPageChange: (event: SelectChangeEvent) => void;
}

const PaginationSizeSelector = ({
  cardsPerPage,
  handleCardsPerPageChange,
}: PaginationSizeProps) => {
  return (
    <Box mb={2}>
      <Typography variant="body1">Показывать по:</Typography>
      <Select
        variant={"outlined"}
        value={cardsPerPage.toString()}
        onChange={handleCardsPerPageChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </Box>
  );
};

export default PaginationSizeSelector;
