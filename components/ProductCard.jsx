import React, { useState } from "react";
import Image from "next/image";
import Car from "../images/car.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  const [stet, setState] = useState(false);
  let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div class="px-2 sm:px-[8%]">
      <h1 style={{ fontSize: "24px" }}>Fresh recommendations</h1>
      <div class="flex -mx-2 flex-wrap">
        {count.map((val, ind) => {
          return (
            <div class="w-1/2 px-2 my-3 sm:w-1/4">
              <div class="h-[290px]">
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
                        stet
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
                      src={Car}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div
                  style={
                    stet
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
                  <div className="flex justify-between items-center ">
                    <div>main sale karna chata hun</div>
                    <AiOutlineHeart style={{ fontSize: "25px" }} />
                  </div>
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: 900,
                      margin: "8px 0",
                    }}
                  >
                    Rs 4000
                  </h1>

                  <p
                    style={{
                      fontSize: "11px",
                      color: "black",
                      zIndex: 5,
                    }}
                  >
                    Karachi, Sindh . 0 minutes ago
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
