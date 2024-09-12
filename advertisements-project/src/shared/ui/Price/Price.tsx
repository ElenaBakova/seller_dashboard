import { Typography } from "@mui/material";

interface Price {
  price: number;
  fontSize?: string;
  bold?: boolean;
}

const Price = ({ price, fontSize = "inherit", bold = false }: Price) => {
  return (
    <Typography
      component="p"
      style={{
        fontWeight: bold ? "bold" : "normal",
        fontSize: fontSize,
      }}
    >
      {price}&nbsp;₽
    </Typography>
  );
};

export default Price;
