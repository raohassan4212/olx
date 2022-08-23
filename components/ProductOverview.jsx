import React, { useEffect, useState } from "react";
import Image from "next/image";
import Map from "../images/map.svg";
import { AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import Data from "../mock_data/productsData.json";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ADDProduct } from "../store/action";

const ProductOverview = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const router = useRouter();

  const [imageCount, setImageCount] = useState(0);
  const [selProduct, setSelProduct] = useState({});
  let arr = [1, 2, 3, 4];

  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      const Product = Data.find((product) => {
        return product.id == id;
      });
      setSelProduct(Product);
    }
  }, [router.isReady]);

  const nextImage = () => {
    if (imageCount <= selProduct.imgs.length - 2) {
      setImageCount((e) => e + 1);
    }
  };

  const previousImage = () => {
    if (imageCount > 0) {
      setImageCount((e) => e - 1);
    }
  };

  // Product Add Function
  const addProduct = () => {
    let prevProducts = localStorage.getItem("cardProducts");
    if (prevProducts) {
      prevProducts = JSON.parse(prevProducts);
    } else {
      prevProducts = [];
    }
    const id = prevProducts.find((val, ind) => {
      return val.id == selProduct.id;
    });
    if (id) {
      const newPrevProduct = prevProducts.map((val, ind) => {
        if (val.id === id.id) {
          if (val.quantity < 5) {
            return { ...val, quantity: (val.quantity += selProduct.quantity) };
          }
        }
        return val;
      });
      localStorage.setItem(`cardProducts`, JSON.stringify(newPrevProduct));
      const newCartProductsDispatch = localStorage.getItem("cardProducts");

      dispatch(ADDProduct(JSON.parse(newCartProductsDispatch)));
    } else {
      prevProducts.push(selProduct);

      localStorage.setItem(`cardProducts`, JSON.stringify(prevProducts));
      const cartProductsDispatch = localStorage.getItem("cardProducts");

      dispatch(ADDProduct(JSON.parse(cartProductsDispatch)));
    }
  };

  const increment = () => {
    if (selProduct.quantity < 5) {
      setSelProduct({ ...selProduct, quantity: selProduct.quantity + 1 });
    }
  };

  const dicrement = () => {
    if (selProduct.quantity > 1) {
      setSelProduct({ ...selProduct, quantity: selProduct.quantity - 1 });
    }
  };

  return (
    <div className="px-2 sm:px-[8%] mt-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-[65%] px-2  ">
          <div className="bg-black flex justify-center h-[490px] ">
            {selProduct?.imgs?.[imageCount] && (
              <Image
                src={selProduct?.imgs?.[imageCount]}
                alt="hello"
                width={500}
                height={490}
              />
            )}
          </div>
          <div className="py-4 border-[#a3b4b6] border-[1px] rounded-b-md flex items-center justify-center">
            <div className="px-1 w-[5%]">
              <div className="flex justify-center active:bg-black active:text-white">
                <AiOutlineLeft size={23} onClick={previousImage} />
              </div>
            </div>
            {selProduct?.imgs?.map((v, i) => {
              return (
                <div className="w-[11.111%] px-3" key={i}>
                  <div
                    className={
                      i == imageCount
                        ? `border-black border-[2px] flex `
                        : `flex`
                    }
                  >
                    <Image src={v} alt="" width={75} height={60} />
                  </div>
                </div>
              );
            })}
            <div className="px-1 w-[5%]">
              <div className="flex justify-center active:bg-black active:text-white">
                <AiOutlineRight size={23} onClick={nextImage} />
              </div>
            </div>
          </div>
          {/* today task */}
          <div className="py-4 border-[#a3b4b6] border-[1px] rounded-md my-2 px-3">
            <p className="text-[19px] text-[#002f34] font-bold">Detail</p>
            <div className="flex justify-between items-center flex-wrap">
              {arr.map((v, i) => {
                return (
                  <div className="w-[48%] my-2" key={i}>
                    <div className="flex justify-between items-center">
                      <p className="text-[14px] text-[#002f34a3]">price</p>
                      <p className="text-[14px] text-[#002f34]">13,00</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="border-[#ccd5d6] my-4" />
            <p className="text-[19px] text-[#002f34] font-bold">Description</p>
            <div>
              <span className="text-[14px] text-[#002f34]"></span>
            </div>
          </div>
        </div>
        <div className="w-[35%] px-2">
          <div className=" w-full  rounded border-[1px] border-[#a3b4b6] px-3 py-7 m-auto">
            <div className=" flex justify-between items-center">
              <div>
                <p className="text-[#002f34] text-[33px] font-black">
                  Rs {Data[0].price}
                </p>
              </div>
              <div className="flex gap-2">
                <IoShareSocialOutline size={22} />
                <AiOutlineHeart size={22} />
              </div>
            </div>
            <div>
              <p className="text-[#002f34a3] text-[15px] my-2 leading-[18px]">
                {Data[0].productName}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[12px] text-[#002f34a3]">{Data[0].location}</p>
              <p className="text-[12px] text-[#002f34a3]">4 weeks ago</p>
            </div>
          </div>
          {/*  */}
          <div className="w-full  rounded border-[1px] border-[#a3b4b6] px-3 py-4 my-3">
            <p className="text-[19px] text-[#002f34]">Seller Description</p>
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <div>
                  <div className="w-[65px] h-[65px] rounded-full overflow-hidden flex">
                    <Image
                      width={65}
                      height={65}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[15px] text-[#222222] font-bold">
                    {selProduct.sellName}
                  </p>
                  <p className="text-[14px] text-[#002f34a3]">
                    Member since july 2020
                  </p>
                </div>
              </div>
              <div>
                <AiOutlineRight size={22} />
              </div>
            </div>
            <button
              className="text-center bg-[#002f34] w-full text-white font-medium py-3 rounded mb-6"
              onClick={addProduct}
            >
              Add To Cart
            </button>
            <div className="flex justify-center items-center gap-2">
              <div className="flex items-center">
                <button
                  className="bg-[#002f34] w-9 text-[20px] rounded-l text-white"
                  onClick={dicrement}
                >
                  -
                </button>
                <div className="w-20 text-center">{selProduct.quantity}</div>
                <button
                  className="bg-[#002f34] w-9 text-[20px] rounded-r text-white"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full  rounded border-[1px] border-[#a3b4b6] px-3 py-4 my-3">
            <p className="text-[19px] font-bold text-[#002f34] mb-4">
              Posted in
            </p>
            <p className="text-[12px] text-[#002f34a3]">Johar Town, Lahore</p>
            <div className="h-[150px] overflow-hidden my-2 rounded ">
              <Image
                src={Map}
                alt=""
                className="hover:scale-[1.2] duration-500 ease-in-out "
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px] font-bold text[#002f34] mt-2">
                SEE LOCATION
              </p>
              <AiOutlineRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
