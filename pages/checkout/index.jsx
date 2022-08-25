import React from "react";
import OrderSummary from "../../components/OrderSummary";
import ShippingInfo from "../../components/ShippingInfo";

const index = () => {
  return (
    <div className="flex flex-wrap w-full  px-10">
      <div className="w-[55%] px-4">
        <div >
          <ShippingInfo />
        </div>
      </div>
      <div className="w-[45%] px-4">
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default index;
