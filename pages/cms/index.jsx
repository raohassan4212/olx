import React from "react";
import { TextField } from "@mui/material";
import ImageUploade from "../../components/ImageUploade";

const index = () => {
  let productDetail = {
    productId: "",
    productName: "",
    productPrice: 0,
    productDiscount: 0,
    productDetail: "",
  };
  return (
    <div>
      <div className="mx-16 my-10">
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product ID"
            variant="outlined"
            fullWidth
            size="small"
            onClick={(e) => productDetail.productId = e.target.value}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Discount"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Detail"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={4}
          />
        </div>
        <div>
          <ImageUploade />
        </div>
      </div>
    </div>
  );
};

export default index;
