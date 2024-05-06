import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCountToZero } from "../store/slice/counterSlice";

const DisplayProduct = () => {
  const values = useSelector((state) => state.product);
  console.log(values);

  const dispatch = useDispatch();
  return (
    <div>
      <Typography variant="h3">{values.productName}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(resetCountToZero());
        }}
      >
        reset count to zero
      </Button>
    </div>
  );
};

export default DisplayProduct;
