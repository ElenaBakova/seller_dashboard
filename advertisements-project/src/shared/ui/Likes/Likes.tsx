import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Stack, Typography } from "@mui/material";

interface Likes {
  likesCount: number;
  fontSize?: string;
  bold?: boolean;
}

const Likes = ({ likesCount, fontSize = "inherit", bold = false }: Likes) => {
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      <FavoriteBorderIcon
        fontSize={fontSize != "inherit" ? "medium" : "small"}
      />
      <Typography
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontSize: fontSize,
        }}
      >
        {likesCount}
      </Typography>
    </Stack>
  );
};

export default Likes;
