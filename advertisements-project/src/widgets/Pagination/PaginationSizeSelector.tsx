import {Box, MenuItem, Select, SelectChangeEvent, Typography} from '@mui/material';

interface SelectPerPageProps {
    adsPerPage: number;
    handleAdsPerPageChange: (event: SelectChangeEvent) => void;
}

const PaginationSizeSelector = ({adsPerPage, handleAdsPerPageChange}: SelectPerPageProps) => {
    return (
        <Box mb={2}>
            <Typography variant="body1">Объявлений на странице:</Typography>
            <Select variant={"outlined"} value={adsPerPage.toString()} onChange={handleAdsPerPageChange}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </Box>
    );
};

export default PaginationSizeSelector;
