import React from "react";
import Image from "next/image";
import Mehran from "../images/mehran.jpg";
import { MdCancel, MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AddedProductPopUp = ({ show }) => {
  let arr = [1, 2, 3, 4];
  const state = useSelector((state) => state.addTOCart);

  useEffect(() => {});
  return (
    <div
      className={
        show
          ? `w-[320px] h-[490px] bg-white absolute right-[35px] top-[150px] shadow-2xl`
          : `hidden`
      }
    >
      <div className="border-b-[1px] border-[#eaeaea] py-2 ">
        <h1 className="text-center text-[12px] font-bold">
          Shopping Cart ({state.length})
        </h1>
      </div>
      <div className="h-[350px] overflow-y-scroll">
        {state.length ? (
          <>
            {state.map((v, i) => {
              return (
                <div
                  className="flex py-2 items-center border-b-[2px] border-[#eaeaea]"
                  key={i}
                >
                  <div className="w-[30%] px-1 ">
                    <div>
                      <Image
                        src={v?.imgs?.[0]}
                        alt="porduct"
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className="w-[70%] px-1">
                    <div>
                      <div className="flex justify-between">
                        <p className="w-[80%] overflow-hidden h-[58px] text-[12px]">
                          Polo Republica Men's PR Printed Strips Shoulder
                          Activewear Polo Shirt - Navy /
                        </p>
                        <MdCancel size={22} />
                      </div>
                      <h1 className="text-[12px] mb-2">
                        Rs {v.price * v.quantity}
                      </h1>
                      <div className="flex items-center">
                        <button className="bg-[#002f34] w-9 text-[20px] rounded-l text-white">
                          -
                        </button>
                        <div className="w-20 text-center">{v.quantity}</div>
                        <button className="bg-[#002f34] w-9 text-[20px] rounded-r text-white">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="h-full flex justify-center items-center">
            <div className="text-center text-[#002f34]">
              <div className="flex justify-center my-2">
                <MdAddShoppingCart size={25} />
              </div>

              <p>Your Cart is Empty</p>
            </div>
          </div>
        )}
      </div>
      <div className="mx-4 my-4">
        <div className="flex justify-between items-center">
          <p className="text-[12px]">Subtotal:</p>
          <p className="text-[12px]">Rs 190,00</p>
        </div>
        <div className="w-full my-2">
          <button className=" w-full py-3 rounded-lg text-white bg-[#002f34]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedProductPopUp;
