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
    imgs: [],
  };

  const getImages = (imgs) => {
    console.log(imgs);
    productDetail.imgs = imgs;
    console.log(productDetail.imgs);
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
            onChange={(e) => (productDetail.productId = e.target.value)}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => (productDetail.productName = e.target.value)}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => (productDetail.productPrice = e.target.value)}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Discount"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => (productDetail.productDiscount = e.target.value)}
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
            onChange={(e) => (productDetail.productDetail = e.target.value)}
          />
        </div>
        <div>
          <ImageUploade getImages={getImages} />
        </div>
      </div>
    </div>
  );
};

export default index;
