import { Typography } from "@mui/material";

interface Price {
  price: number;
}

const Price = ({ price }: Price) => {
  return <Typography component="p">{price}&nbsp;₽</Typography>;
};

export default Price;
