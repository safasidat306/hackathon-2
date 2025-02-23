import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/Icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/Icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/Icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/Icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/Icons/calvin-klein-logo.svg",
  },
];

const Logos = () => {
  return (
  <section id= "Brands">
    <div className="bg-black absolute">
      <div className="w-screen mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-6 space-x-4">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={0}
            width={0}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Logos;
