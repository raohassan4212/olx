import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdCancel, MdAddShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { ADDProduct } from "../store/action";

const AddedProductPopUp = ({ show }) => {
  const [price, setPrice] = useState(0);
  const state = useSelector((state) => state.addTOCart);
  const dispatch = useDispatch();

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

  const increment = (id) => {
    const products = JSON.parse(localStorage.getItem("cardProducts"));

    const newProducts = products.map((val) => {
      if (val.id === id) {
        if (val.quantity < 5) {
          return { ...val, quantity: (val.quantity += 1) };
        }
      }
      return val;
    });

    localStorage.setItem(`cardProducts`, JSON.stringify(newProducts));
    const newIncrementProductsDispatch = localStorage.getItem("cardProducts");
    dispatch(ADDProduct(JSON.parse(newIncrementProductsDispatch)));
  };

  const decrement = (id) => {
    const products = JSON.parse(localStorage.getItem("cardProducts"));

    const newProducts = products.map((val) => {
      if (val.id === id) {
        if (val.quantity > 1) {
          return { ...val, quantity: (val.quantity -= 1) };
        }
      }
      return val;
    });

    localStorage.setItem(`cardProducts`, JSON.stringify(newProducts));
    const newIncrementProductsDispatch = localStorage.getItem("cardProducts");
    dispatch(ADDProduct(JSON.parse(newIncrementProductsDispatch)));
  };

  const deleteProduct = (id) => {
    console.log(id);
    const products = JSON.parse(localStorage.getItem("cardProducts"));

    const productDeleted = products.filter((val) => {
      return val.id !== id
    })

    localStorage.setItem(`cardProducts`, JSON.stringify(productDeleted));
    const deletedProductsDispatch = localStorage.getItem("cardProducts");
    dispatch(ADDProduct(JSON.parse(deletedProductsDispatch)));
  };

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
          Shopping Cart ({state?.length})
        </h1>
      </div>
      <div className="h-[350px] overflow-y-scroll">
        {state?.length ? (
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
                        <MdCancel
                          size={22}
                          onClick={() => deleteProduct(v.id)}
                        />
                      </div>
                      <h1 className="text-[12px] mb-2">
                        Rs {v.price * v.quantity}
                      </h1>
                      <div className="flex items-center">
                        <button
                          className="bg-[#002f34] w-9 text-[20px] rounded-l text-white"
                          onClick={() => decrement(v.id)}
                        >
                          -
                        </button>
                        <div className="w-20 text-center">{v.quantity}</div>
                        <button
                          className="bg-[#002f34] w-9 text-[20px] rounded-r text-white"
                          onClick={() => increment(v.id)}
                        >
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
          <p className="text-[12px]">Rs {price}</p>
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
