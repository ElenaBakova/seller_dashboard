import { Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Views {
  viewsCount: number;
  fontSize?: string;
  bold?: boolean;
}

const Views = ({ viewsCount, fontSize = "inherit", bold = false }: Views) => {
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      <VisibilityIcon fontSize={fontSize != "inherit" ? "medium" : "small"} />
      <Typography
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontSize: fontSize,
        }}
      >
        {viewsCount}
      </Typography>
    </Stack>
  );
};

export default Views;
