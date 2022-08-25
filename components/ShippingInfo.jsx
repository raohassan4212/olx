import React from "react";
import Image from "next/image";
import Logo from "../images/elo.webp";
import TextField from "@mui/material/TextField";

const ShippingInfo = () => {
  return (
    <div className="w-full mt-10">
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
    </div>
  );
};

export default ShippingInfo;
