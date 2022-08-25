import Image from "next/image";
import React from "react";
import Mehran from "../images/mehran.jpg";
import { TextField } from "@mui/material";

const OrderSummary = () => {
  let arr = [1, 2];
  return (
    <div className="bg-[#fafafa] h-screen">
      <div className="w-[420px] h-[170px]  mt-[60px] ml-[20px] overflow-y-scroll scrollbar-hide border-[#e1e1e1] border-b-[1px]">
        {arr.map((val) => {
          return (
            <div className="flex justify-between items-center flex-wrap my-5">
              <div className="flex items-center gap-3">
                <Image src={Mehran} alt="" width={60} height={60} />
                <div>
                  <p className="w-[250px] text-[14px] text-[333333] font-medium leading-[16px]">
                    Archer & Finch Kid's Printed Short Sleeve Tee Shirt
                  </p>
                  <p className="text-[#717171] text-[12px]">
                    White & Red / 3-4 Years
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[14px] text-[#333333] font-medium">
                  Rs299.00
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[420px] ml-[20px] py-4 border-[#e1e1e1] border-b-[1px] flex items-center flex-wrap">
        <div className="w-[70%] pr-1">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div className="w-[30%] pr-1">
          <button className="py-2 px-6 bg-[#c8c8c8] w-full rounded ">
            Apply
          </button>
        </div>
      </div>
      <div className="w-[420px] ml-[20px] py-4 border-[#e1e1e1] border-b-[1px]">
        <div className="flex justify-between items-center flex-wrap ">
          <p className="text-[14px]">Subtotal</p>
          <p className="text-[14px] font-medium">Rs950.00</p>
        </div>
        <div className="flex justify-between items-center flex-wrap ">
          <p className="text-[14px]">Shipping</p>
          <p className="text-[14px] font-medium">Rs950.00</p>
        </div>
      </div>
      <div className="w-[420px] ml-[20px] py-4 border-[#e1e1e1] border-b-[1px]">
        <div className="flex justify-between items-center flex-wrap ">
          <p className="text-[14px]">Total</p>
          <p className="text-[14px] font-medium">
            PKR <span className="text-[24px]">600.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
