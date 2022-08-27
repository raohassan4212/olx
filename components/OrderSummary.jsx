import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const state = useSelector((state) => state.addTOCart);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const priceArray = state?.map((val) => {
      return val.price * val.quantity;
    });

    if (priceArray?.length) {
      const sum = priceArray?.reduce((pre, current) => {
        return (pre += current);
      });
      setPrice(sum);
    }
  }, [state]);

  return (
    <div className="bg-[#fafafa] h-screen">
      <div className="w-[420px] h-[170px]  mt-[60px] ml-[20px] overflow-y-scroll scrollbar-hide border-[#e1e1e1] border-b-[1px]">
        {state?.map((val, ind) => {
          return (
            <div
              className="flex justify-between items-center flex-wrap my-5"
              key={ind}
            >
              <div className="flex items-center gap-3">
                <div>
                  <Image src={val.imgs[0]} alt="" width={60} height={60} />
                  <span className="px-1 font-bold  text-[12px] text-center relative right-1 bottom-14 bg-[#727272e6] text-white rounded-full">
                    {val.quantity}
                  </span>
                </div>
                <div>
                  <p className="w-[250px] text-[14px] text-[333333] font-medium leading-[16px]">
                    {val.productName}
                  </p>
                  <p className="text-[#717171] text-[12px]">
                    White & Red / 3-4 Years
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[14px] text-[#333333] font-medium">
                  Rs{val.quantity * val.price}
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
          <p className="text-[14px] font-medium">Rs{price}</p>
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
