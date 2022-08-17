import React from "react";
import Image from "next/image";
import BannerImage from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center w-full my-5 px-[8%]">
      <div className="">
        <Image src={BannerImage} />
      </div>
    </div>
  );
};

export default Banner;
