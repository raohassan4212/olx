import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import productData from "../mock_data/productsData.json";
import Link from "next/link";

const ProductCard = () => {
  const [stet, setState] = useState(false);


  return (
    <div className="px-2 sm:px-[8%]">
      <h1 style={{ fontSize: "24px" }}>Fresh recommendations</h1>
      <div className="flex -mx-2 flex-wrap">
        {productData.map((val, ind) => {
          return (
            <Link href={{
              pathname: `/product-detail/[id]`,
              query: {id: val.id}
            }} key={ind}>
              <div
                className="w-1/2 px-2 my-3 sm:w-1/4"
              >
                <div className="h-[290px]">
                  <div className="h-[145px] bg-black">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <span
                        style={
                          val.feature != true
                            ? {
                                display: "none",
                              }
                            : {
                                position: "absolute",
                                backgroundColor: "#ffce32",
                                bottom: 5,
                                left: 5,
                                zIndex: 1,
                                padding: "2px 8px",
                                borderRadius: "5px",
                                fontSize: "12px",
                                fontWeight: 900,
                              }
                        }
                      >
                        Feature
                      </span>
                      <Image
                        alt="Car"
                        src={val.imgs[0]}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div
                    style={
                      val.feature != true
                        ? {
                            width: "100%",
                            height: "145px",
                            padding: "6px 10px",
                            borderBottom: "1px solid",
                            borderRight: "1px solid",
                            borderLeft: "1px solid",
                            borderColor: "#ccd5d6",
                          }
                        : {
                            width: "100%",
                            height: "145px",
                            padding: "6px 10px",
                            borderBottom: "1px solid #ccd5d6",
                            borderRight: "1px solid #ccd5d6",
                            borderLeft: "5px solid #ffce32",
                          }
                    }
                  >
                    <div className="flex justify-between  ">
                      <div className="w-[80%] h-[50px] overflow-hidden">
                        {val.productName}
                      </div>
                      <AiOutlineHeart style={{ fontSize: "25px" }} />
                    </div>
                    <h1
                      style={{
                        fontSize: "20px",
                        fontWeight: 900,
                        margin: "8px 0",
                      }}
                    >
                      Rs {val.price}
                    </h1>

                    <p
                      style={{
                        fontSize: "11px",
                        color: "black",
                        zIndex: 5,
                      }}
                    >
                      {val.location} . 0 minutes ago
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
