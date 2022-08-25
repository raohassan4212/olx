import React from "react";
import OrderSummary from "../../components/OrderSummary";
import ShippingInfo from "../../components/ShippingInfo";

const index = () => {
  return (
    <div className="flex flex-wrap w-full ">
      <div className="w-[55%] px-8">
        <div>
          <ShippingInfo />
        </div>
      </div>
      <div className="w-[45%] px-8 bg-[#fafafa]">
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default index;
