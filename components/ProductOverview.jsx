import React, { useEffect } from "react";
import Image from "next/image";
import ProductImage from "../images/oppo.jpg";
import Person from "../images/person.png";
import Map from "../images/map.svg";
import Car from "../images/car.jpg";
import { AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const ProductOverview = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    console.log("Hello");
  });
  return (
    <div class="px-2 sm:px-[8%] mt-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-[65%] px-2  ">
          <div className="bg-black flex justify-center h-[490px] ">
            <Image src={ProductImage} alt="" />
          </div>
          <div className="py-4 border-[#a3b4b6] border-[1px] rounded-b-md flex items-center justify-center">
            <div className="px-1 w-[5%]">
              <div className="flex justify-center">
                <AiOutlineLeft size={23} />
              </div>
            </div>
            {arr.map((v, i) => {
              return (
                <div className="w-[11.111%] px-3" key={i}>
                  <div>
                    <Image src={Car} alt="" width={75} height={60} />
                  </div>
                </div>
              );
            })}
            <div className="px-1 w-[5%]">
              <div className="flex justify-center">
                <AiOutlineRight size={23} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] px-2">
          <div className=" w-full  rounded border-[1px] border-[#a3b4b6] px-3 py-7 m-auto">
            <div className=" flex justify-between items-center">
              <div>
                <p className="text-[#002f34] text-[33px] font-black">
                  Rs 35000
                </p>
              </div>
              <div className="flex gap-2">
                <IoShareSocialOutline size={22} />
                <AiOutlineHeart size={22} />
              </div>
            </div>
            <div>
              <p className="text-[#002f34a3] text-[15px] my-2">
                rent a car,car rental,car rental services
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[12px] text-[#002f34a3]">Islampura, Lahore</p>
              <p className="text-[12px] text-[#002f34a3]">4 weeks ago</p>
            </div>
          </div>
          {/*  */}
          <div className="w-full  rounded border-[1px] border-[#a3b4b6] px-3 py-4 my-3">
            <p className="text-[19px] text-[#002f34]">Seller Description</p>
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <div>
                  <div className="w-[65px] h-[65px] rounded-full overflow-hidden">
                    <Image src={Person} alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-[15px] text-[#222222] font-bold">
                    Waqas Rafiq
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
            <button className="text-center bg-[#002f34] w-full text-white font-medium py-3 rounded mb-6">
              Chat with Seller
            </button>
            <div className="flex justify-center items-center gap-2">
              <BsTelephone size={22} />
              <p>*****</p>
              <p className="text-[12px] text-[#3a77ff] border-b-[1px] border-[#3a77ff]">
                show number
              </p>
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
