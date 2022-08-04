import React from "react";
import OLX_BLUE from "../../images/OLX-blue.png";
import OLX_BLACK from "../../images/OLX-BLACK.jpg";
import Image from "next/image";
import { AiOutlineCar } from "react-icons/ai";
import { BsBuilding, BsSearch } from "react-icons/bs";
import SearchBarDropDown from "../searchBarDropDown/SearchBarDropDown";
import "./navBar.module.css";

const Navbar = () => {
  return (
    <div className="px-40 py-3 bg-[#f7f8f8]">
      <div className="mx-3 flex justify-start gap-5 items-center">
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
      <div className="w-full flex  items-center gap-3">
        <div className="w-[100px]">
          <Image
            src={OLX_BLACK}
            // style={{minHeight: "40px", minWidth: "100px"}}
            height={70}
            width={90}
            className="object-fill"
          />
        </div>
        <div>
          <SearchBarDropDown />
        </div>
        <div>
          <div className=" border-[#bebfbf] border-[1.5px] flex  h-[56px] w-[650PX] justify-between rounded p-0">
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
        <div>
          <button>login</button>
          <button className=" sell-btn">SELL</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
