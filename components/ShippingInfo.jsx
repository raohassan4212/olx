import React from "react";
import Image from "next/image";
import Logo from "../images/elo.webp";
import { AiOutlineLeft } from "react-icons/ai";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

const ShippingInfo = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center w-full">
        <Image src={Logo} alt="logo" width={140} height={90} />
      </div>
      <div className="flex justify-between items-center my-4">
        <p className="text-[18px] text-[#333333]">Contact information</p>
        <p className="text-[14px] text-[#545454]">
          Already have an account?Log in
        </p>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      <div className="my-4 flex items-center">
        <input type="checkbox" className="w-[15px] h-[15px]" />{" "}
        <span className="mx-3 text-[14px]">Email with news and offer</span>
      </div>
      <div className="mt-6 mb-4">
        <p className="text-[18px] text-[#333333]">Shipping address</p>
      </div>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Country"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="flex flex-wrap my-4">
        <div className="w-[50%] pr-1">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="w-[50%] pl-1">
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      <div className="flex flex-wrap my-4">
        <div className="w-[50%] pr-1">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="w-[50%] pl-1">
          <TextField
            id="outlined-basic"
            label="Postal Code"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
      </div>
      <div className="mb-4">
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          fullWidth
          size="small"
        />
      </div>
      <div className="my-2 flex items-center">
        <input type="checkbox" className="w-[15px] h-[15px]" />
        <span className="mx-3 text-[14px]">
          Save this information for next time
        </span>
      </div>
      <div className="my-2 flex items-center">
        <input type="checkbox" className="w-[15px] h-[15px]" />
        <span className="mx-3 text-[14px]">Text me with news and offers</span>
      </div>
      <div className="flex justify-between items-center my-4 ">
        <div className="flex justify-between items-center gap-1">
          <AiOutlineLeft />
          <p>Return to cart</p>
        </div>
        <div>
          <button className="bg-[#002f34] text-white py-4 px-10 rounded-md">Countinue to shippng</button>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;