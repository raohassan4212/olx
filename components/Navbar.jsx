import React from "react";
import OLX_BLUE from "../images/OLX-blue.png";
import OLX_BLACK from "../images/OLX-BLACK.jpg";
import Image from "next/image";
import { AiOutlineCar } from "react-icons/ai";
import { BsBuilding, BsSearch } from "react-icons/bs";
import SearchBarDropDown from "./SearchBarDropDown";

const Navbar = () => {
  return (
    <div className="px-[8%] py-2 bg-[#f7f8f8] sticky top-0 z-50">
      <div className="flex justify-start gap-5 items-center">
        <div>
          <Image src={OLX_BLUE} height={40} width={70} />
        </div>
        <div className="text-xs font-semibold flex items-center justify-between gap-2 hover:text-blue-500">
          <AiOutlineCar /> <span>MOTORS</span>
        </div>
        <div className="text-xs font-semibold flex items-center justify-between gap-2 hover:text-blue-500">
          <BsBuilding /> <span>PROPERTY</span>
        </div>
      </div>
      <div className="w-full flex  items-center gap-5">
        <div className="w-[10%]">
          <Image
            src={OLX_BLACK}
            // style={{minHeight: "40px", minWidth: "100px"}}
            height={70}
            width={90}
            className="object-fill"
          />
        </div>
        <div className="w-[25%]">
          <SearchBarDropDown />
        </div>
        <div className="w-[50%]">
          <div className=" border-[#bebfbf] border-[1.5px] flex  h-[56px] w-[100%] justify-between rounded p-0">
            <input
              className=" h-full border-none w-full pl-2"
              type="text"
              name=""
              id=""
            />
            <span className="h-full text-white text-center bg-black px-4 flex items-center text-2xl right-round object-fill ">
              <BsSearch />
            </span>
          </div>
        </div>
        <div className="w-[15%] flex justify-evenly items-center flex-wrap mx-2">
          <button className="font-black border-b-4 border-black text-lg">login</button>
          <button
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "8px",
              border: "none",
              borderTop: "5px solid #23e5db",
              borderBottom: "5px solid #ffce32",
              borderRight: "5px solid #3a77ff",
              borderLeft: "5px solid #3a77ff",
              borderRadius: "20px",
              padding: "5px 25px",
              backgroundColor: "white",
              boxShadow: "0 0 10px gray",
            }}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
