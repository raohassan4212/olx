import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

const index = () => {
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
            label="Product Discount"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
