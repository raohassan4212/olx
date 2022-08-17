import React from "react";
import Image from "next/image";
import OLX_FOOTER from "../images/olx-footer.webp";
import Apple from "../images/apple.svg";
import Google from "../images/google.svg";
import App from "../images/app.svg";

const Footer = () => {
  let arr = [1, 2, 3];
  let footerData = [
    ["POPULAR CATEGORIES", ["Cars", "Flats for rent", "Mobile Phones", "Jobs"]],
    ["TRENDING SEARCHES", ["Bikes", "Watches", "Books", "Dogs"]],
    [
      "ABOUT US",
      ["About EMPG", "OLX Blog", "Contact Us", "OLX for Businesses"],
    ],
    ["OLX", ["Help", "Sitemap", "Terms of use", "Privacy Policy"]],
  ];
  return (
    <div>
      {/* Upper Footer */}
      <div class="px-2">
        <div class="flex flex-wrap -mx-2 bg-[#f7f8f9]">
          <div class="sm:w-1/3 w-1/1">
            <div class="px-6">
              <Image src={OLX_FOOTER} alt="" />
            </div>
          </div>
          <div class="sm:w-1/3 w-1/1">
            <div class="my-8">
              <h1 className="text-center text-[32px] font-black text-[#002f34]">
                TRY THE OLX APP
              </h1>

              <h1 className="text-start text-[20px] font-normal text-[#002f34] mx-4">
                Buy, sell and find just about anything using the app on your
                mobile.
              </h1>
            </div>
          </div>
          <div class="sm:w-1/3 w-1/1">
            <div class="flex items-center h-full px-8">
              <div className="w-full">
                <h1 className="text-[14px] font-bold my-4">
                  GET YOUR APP TODAY
                </h1>
                <div className="flex -mx-2 flex-wrap">
                  <div className="w-1/3 px-2 h-10">
                    <Image src={Apple} alt="" />
                  </div>
                  <div className="w-1/3 px-2 h-1">
                    <Image src={Google} alt="" />
                  </div>
                  <div className="w-1/3 px-2 h-10">
                    <Image src={App} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Footer */}
      <div className="flex p-7 bg-[#ebeeef]">
        {footerData.map((val, ind) => {
          return (
            <div className="w-1/5 m-2">
              <div>
                <h1 className="text-[14px] font-black text-[#002F34]">
                  {val[0]}
                </h1>
                {val[1].map((v, i) => {
                  return (
                    <div className="text-[12px] text-[#002F34A3]">{v}</div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="w-1/5 m-2">
          <div>
            <h1 className="text-[14px] font-black text-[#002F34]">
              POPULAR CATEGORIES
            </h1>
            <div className="text-[12px] text-[#002F34A3]">Cars</div>
            <div className="text-[12px] text-[#002F34A3]">Flats for rent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
