import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Stack, Typography } from "@mui/material";

interface Likes {
  likesCount: number;
}

const Likes = ({ likesCount }: Likes) => {
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      <FavoriteBorderIcon fontSize="small" />
      <Typography>{likesCount}</Typography>
    </Stack>
  );
};

export default Likes;
