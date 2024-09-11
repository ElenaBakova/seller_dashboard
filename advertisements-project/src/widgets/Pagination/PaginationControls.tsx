import {Box, Pagination} from "@mui/material";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationControls = ({currentPage, totalPages, onPageChange}: PaginationProps) => {
    return (
        <Box mt={2} display="flex" justifyContent="center">
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_, page) => onPageChange(page)}
            />
        </Box>
    );
}

export default PaginationControls;