import {Stack, Typography} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Views {
    viewsCount: number;
}

const Views = ({viewsCount}: Views) => {
    return (
        <Stack direction="row" alignItems="center" gap={0.5}>
            <VisibilityIcon fontSize="small"/>
            <Typography>
                {viewsCount}
            </Typography>
        </Stack>
    );
};

export default Views;