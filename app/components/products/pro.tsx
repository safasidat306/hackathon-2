"use client";
import React, { useState } from "react";
import Filters from "../Filters/filters";
import Image from "next/image";

interface ProProps {
  setIsFilterBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    image: "/white.png",
    rating: 3.5,
    price: 145,
    discountPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    image: "/purple.png",
    rating: 4.0,
    price: 180,
    discountPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    image: "/line.png",
    rating: 5.0,
    price: 120,
    discountPrice: 150,
    discount: "-30%",
  },
  {
    id: 4,
    name: "SKINNY FIT JEANS",
    image: "/2.png",
    rating: 3.5,
    price: 240,
    discountPrice: 260,
    discount: "-20%",
  },
  {
    id: 5,
    name: "CHECKERED SHIRT",
    image: "/3.png",
    rating: 4.5,
    price: 180,
    discountPrice: null,
    discount: null,
  },
  {
    id: 6,
    name: "SLEEVE STRIPED T-SHIRT",
    image: "/4.png",
    rating: 4.5,
    price: 130,
    discountPrice: 160,
    discount: "-30%",
  },
  {
    id: 7,
    name: "VERTICAL STRIPED SHIRT",
    image: "/5.png",
    rating: 5.0,
    price: 212,
    discountPrice: 232,
    discount: "-30%",
  },
  {
    id: 8,
    name: "COURAGE GRAPHIC T-SHIRT",
    image: "/6.png",
    rating: 4.0,
    price: 145,
    discountPrice: null,
    discount: null,
  },
  {
    id: 9,
    name: "LOOSE FIT BERMUDA SHORTS",
    image: "/7.png",
    rating: 3.0,
    price: 80,
    discountPrice: null,
    discount: null,
  },
];

const Pro: React.FC<ProProps> = ({ setIsFilterBarOpen }) => {
  const [isFilterBarOpen, setLocalFilterBarOpen] = useState(false);

  const toggleFilterBar = () => {
    const newState = !isFilterBarOpen;
    setLocalFilterBarOpen(newState);
    setIsFilterBarOpen(newState); 
  };

  const closeFilterBar = () => {
    setLocalFilterBarOpen(false);
    setIsFilterBarOpen(false); 
  };

  return (
    <div>
      <div className="flex md:pt-20 md:pb-5 max-sm:pb-[10px] md:px-5 max-sm:px-2">
        <div className="flex justify-between md:gap-3 max-sm:px-6 max-sm:gap-[6px] my-2 max-sm:my-5">
          <h1 className="font-bold md:text-[32px] max-sm:text-[24px] font-satoshi">Casual</h1>
          <div className="flex flex-row gap-[10px]">
            <p className="text-[#00000099] font-satoshi text-[16px] max-sm:mt-2 md:mt-5 max-sm:pt-1">
              Showing 1-10 of 100 Products
            </p>
            <p className="text-[black] font-satoshi text-[16px] max-sm:hidden md:mt-5">
              Sort by: <b>Most Popular</b>
            </p>
            <Image
              src="/Icons/below.svg"
              alt="downward-icon"
              height={6.5}
              width={11.5}
              className="max-sm:hidden md:pt-5"
            />
          </div>
        </div>
        <div className="max-sm:mr-4 max-sm:mt-8">
          <div
            className="w-[32px] h-[32px] bg-[#F0F0F0] rounded-full flex justify-center items-center md:hidden"
            onClick={toggleFilterBar}
          >
            <Image src="/Icons/filter.svg" alt="filter-icon" height={12.5} width={13.5} />
          </div>
          <div
            className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-all duration-300 rounded-t-[40px] border-[1px] border-slate-100 ${
              isFilterBarOpen ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              maxHeight: isFilterBarOpen ? "98vh" : "0",
            }}
          >
            {isFilterBarOpen && <Filters onClose={closeFilterBar} />}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-1 items-center max-sm:gap-1">
            <div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                height={200}
                width={200}
                className="max-sm:w-[140px] max-sm:h-[140px]"
              />
            </div>
            <h3 className="font-bold max-sm:text-[16px] font-satoshi text-[20px] leading-[27px] text-center">
              {product.name}
            </h3>
            <div className="flex flex-row justify-center gap-1">
              {[...Array(Math.floor(product.rating))].map((_, idx) => (
                <Image key={idx} src="/star.svg" height={15} width={15} alt="star" />
              ))}
              {product.rating % 1 !== 0 && (
                <Image src="/half-star.svg" height={15} width={7.79} alt="half-star" />
              )}
              <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
                {product.rating.toFixed(1)}/
              </span>
              <span className="text-slate-600 font-satoshi text-[14px]">5</span>
            </div>
            <div className="flex flex-row gap-3 justify-center">
              <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">${product.price}</h5>
              {product.discountPrice && (
                <>
                  <h5 className="font-satoshi font-semibold text-[24px] leading-[27.6px] text-slate-400 line-through">
                    ${product.discountPrice}
                  </h5>
                  <button className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-center text-[12px] font-satoshi">
                    {product.discount}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pro;


