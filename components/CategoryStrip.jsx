import React from "react";

const CategoryStrip = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center px-[8%] py-3 bg-white border-b-2">
      <div className="text-sm font-black">ALL CATEGORIES</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">Mobile Phones</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">Cars</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">Motorcycles</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">Houses</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">TV-vedio-Audio</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">Tablets</div>
      <div className="text-[15px] hover:text-[#5ec6c1]">Land & Plots</div>
    </div>
  );
};

export default CategoryStrip;
