"use client";

<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2,3,4&display=swap" rel="stylesheet"></link>
import React, { useState } from "react";
import Header from '../components/header/header';
import Image from 'next/image';
import Footer from "../components/footer/footer";
const product : React.FC = () => {
  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div>
      <Header/>
    <div className='flex justify-center items-center flex-col'>
      <div className='flex flex-col justify-center'>
      <div className='flex flex-row gap-[12px] max-sm:gap-[8px] py-8 justify-start max-sm:justify-center lg:pl-12'>
  <p className='text-[#00000099] font-satoshi font-[400px] text-[16px] leading-[21.6px] max-sm:text-[14px] max-sm:leading-[19px]'>Home</p>
  <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className='mt-1 max-sm:mt-0.5'></Image>
  <p className='text-[#00000099] font-satoshi font-[400px] text-[16px] leading-[21.6px] max-sm:text-[14px] max-sm:leading-[19px]'>Shop</p>
  <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className='mt-1 max-sm:mt-0.5'></Image>
  <p className='text-[#00000099] font-satoshi font-[400px] text-[16px] leading-[21.6px] max-sm:text-[14px] max-sm:leading-[19px]'>Men</p>
  <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className='mt-1 max-sm:mt-0.5'></Image>
  <p className='text-[black] font-satoshi font-[400px] text-[16px] leading-[21.6px] max-sm:text-[14px] max-sm:leading-[19px]'>T-shirts</p>
</div>

      {/*hero*/}
      <div>
        <div className='flex md:flex-row max-sm:flex-col justify-center items-center gap-4'>
          <div className='flex md:flex-col max-sm:flex-row gap-2 '> {/*1st col*/}
<div className='max-sm:w-[112px] max-sm:h-[106px] md:w-[152px] md:h-[167px] rounded-[20px] border-[1px] border-black flex justify-center items-center bg-[#F0EEED]'>
  <Image src = "/sh-1.png" alt = "img" height={100} width={100}></Image>
</div>

<div className='w-[152px] h-[167px] max-sm:w-[112px] max-sm:h-[106px] rounded-[20px] border-[1px] flex justify-center items-center bg-[#F0EEED]'>
  <Image src = "/sh2.png" alt = "img" height={100} width={100}></Image>
</div>

<div className='w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] rounded-[20px] border-[1px] flex justify-center items-center bg-[#F0EEED]'>
  <Image src = "/sh3.png" alt = "img" height={110} width={110} className='rounded-md max-sm:w-[100px] max-sm:h-[100px] '></Image>
</div>
    </div>{/*1st col end*/}

<div className='w-[444px] h-[530px] max-sm:w-[350px] max-sm:h-[290px] radius-[20px] bg-[#F0EEED] flex justify-center items-center rounded-[20px]'>{/*2nd col*/}
<Image src = "/sh-1.png" alt ="img" height={400} width={400} className="max-sm:w-[300px] max-sm:h-[250px] "></Image>
</div>{/*2nd col end*/}

<div className='flex flex-col justify-center gap-2'>{/*3rd col*/}
<h1 className='font-integralCF font-extrabold max-sm:text-center text-[40px] max-sm:text-[24px] max-sm:leading-[28px] leading-[48px] uppercase'>One Life Graphic T-shirt</h1>{/*row 1*/}
         <div className="flex flex-row max-sm:justify-center gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={22.35} width={11.75} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            4.5/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>

        <div className="flex flex-row max-sm:justify-center gap-3 ">{/*row 3*/}
          <h5 className="font-satoshi font-bold text-[32px] leading-[27.6px]">
            $260
          </h5>
          <h5 className="font-satoshi font-semibold line-through text-[32px] leading-[27.6px] text-slate-400">
            $300
          </h5>
          <button className="w-[72px] h-[34px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-center text-[16px] font-satoshi">
            -40%
          </button>
          </div>

{/*row 4*/}
<div className="max-sm:flex max-sm:justify-center max-sm:items-center">
<p className='md:w-[590px] max-sm:px-6 max-sm:w-[389px] font-satoshi font-normal max-sm:text-[14px] text-[16px] md:leading-[22px] text-[#00000099]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
</div>
{/*line*/}
<div className=" max-sm:flex max-sm:justify-center max-sm:items-center">
<div className='md:w-[590px] max-sm:w-[358px] border-[1px] bg-[#0000001A] my-4'></div>
</div>
{/*row 5*/}
<div className="flex max-sm:justify-center max-sm:items-center">
<p className='font-satoshi font-normal max-sm:text-[14px] text-[16px] leading-[21.6px] text-[#00000099]'>Select Colors</p>
</div>

{/*row 6*/}
<div className='flex flex-row py-[2px] max-sm:justify-center max-sm:items-center gap-4'>
  <div className='h-[37px] w-[37px] max-sm:w-[39.14px] max-sm:h-[39.14px] bg-[#4F4631] rounded-full flex justify-center items-center'>
    <Image src ="/Icons/tickmark.svg" alt ="tick" height={9.5} width={13}></Image>
  </div>

  <div className='h-[37px] w-[37px] max-sm:w-[39.14px] max-sm:h-[39.14px] bg-[#314F4A] rounded-full'></div>

  <div className='h-[37px] w-[37px] max-sm:w-[39.14px] max-sm:h-[39.14px] bg-[#31344F] rounded-full'> </div>
</div>

{/*line*/}
<div className=" max-sm:flex max-sm:justify-center max-sm:items-center">
<div className='md:w-[590px] max-sm:w-[358px] border-[1px] bg-[#0000001A] my-4'></div>
</div>

{/*row 7*/}
<div className="flex max-sm:justify-center max-sm:items-center">
<p className='font-satoshi font-normal max-sm:text-center max-sm:text-[14px] text-[16px] leading-[21.6px] text-[#00000099]'>Choose Size</p>
</div>

{/*row 8*/}
<div className='gap-3 flex flex-row  max-sm:justify-center max-sm:items-center '>
  <button className='max-sm:h-[39px] max-sm:w-[74px] h-[46px] w-[86px] rounded-[62px] text-center text-[#00000099] text-[16px] font-satoshi font-normal bg-[#F0F0F0] '>Small</button>
  <button className='max-sm:h-[39px] max-sm:w-[90px] h-[46px] w-[105px] rounded-[62px] text-center text-[#00000099] text-[16px] font-satoshi font-normal bg-[#F0F0F0]'>Medium</button>
  <button className='max-sm:h-[39px] max-sm:w-[76px] h-[46px] w-[89px] rounded-[62px] text-center text-[white] text-[16px] font-satoshi font-normal bg-[black]'>Large</button>
  <button className='max-sm:h-[39px] max-sm:w-[89px] h-[46px] w-[104px] rounded-[62px] text-center text-[#00000099] text-[16px] font-satoshi font-normal bg-[#F0F0F0] '>X-Large</button>
</div>

{/*line*/}
<div className=" max-sm:flex max-sm:justify-center max-sm:items-center">
<div className='md:w-[590px] max-sm:w-[358px] border-[1px] bg-[#0000001A] my-4'></div>
</div>
{/*row 9*/}
<div className='flex flex-row gap-4  max-sm:justify-center max-sm:items-center'>

  <button className='w-[170px] h-[52px] max-sm:h-[44px] max-sm:w-[110px] bg-[#F0F0F0] flex flex-row justify-between items-center rounded-[62px] gap-2 px-[20px] '>
    <Image src ="/Icons/minus.svg" alt="minus-sign" height={2.25} width={18.75} className="max-sm:h-[15.63px] max-sm:w-[15.63px]"></Image>
    <span className='font-satoshi font-medium leading-[21.6px] w-[6px] h-[22px] text-[16px]'>1</span>
    <Image src ="/Icons/plus.svg" alt="plus-sign" height={18.75} width={18.75} className="max-sm:h-[15.63px] max-sm:w-[15.63px]"></Image>
  </button>

<button className='w-[400px] h-[52px] max-sm:h-[44px] max-sm:w-[236px] bg-[black] text-center text-white rounded-[62px]'>Add to Cart</button>
</div>
    </div>
        </div>

{/*Line*/}
 <div className="md:w-[1420px] py-8 flex justify-center items-center">
      {/* Tabs Container */}
      <div className="flex justify-center items-center border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`font-satoshi max-sm:text-[16px] text-[20px] max-sm:px-4 md:px-36 leading-[22px] py-6 text-[#00000099] font-normal transition-all duration-300
              ${
                activeTab === index
                  ? "text-black border-b-2 border-black"
                  : "hover:text-black"
              }
            `}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

<div className="flex justify-between max-sm:px-6 md:px-16 md:items-center pb-8">
  <div className="font-satoshi font-bold max-sm:text-[20px] text-[24px] leading-[32.4px]">All Reviews <span className="font-satoshi font-normal max-sm:text-[14px] text-[16px] leading-[22px] text-[#00000099]">(451)</span>
  </div>
  

<div className="gap-[10px] flex flex-row">
  <div className="max-sm:h-[40px] max-sm:w-[40px] w-[48px] h-[48px] rounded-full bg-[#F0F0F0] flex justify-center items-center "><Image src = "/Icons/filter.svg" alt= "filter-icon" height={18.75} width={20.25} className="w-[16.88px] h-[15.63px]"></Image></div>
  <div className="w-[120px] max-sm:hidden h-[48px] rounded-full bg-[#F0F0F0] flex px-6 justify-between items-center text-[16px] font-satoshi font-medium leading-[21.6px] ">
  Latest
  <Image src = "/Icons/down.svg" alt= "downward-icon" height={6.5} width={11.5}></Image>
  </div>
  <div className="w-[166px] h-[48px] max-sm:h-[40px] max-sm:w-[113px] rounded-full bg-[black] flex justify-center items-center max-sm:text-[12px] text-[16px] font-satoshi text-[white] font-medium leading-[21.6px] ">Write a Review</div>
</div>
</div>

{/*reviews cards*/}
<div className="flex flex-wrap justify-center gap-4 max-sm:px-4 items-center">
<div className="w-[610px] h-[241.58px] max-sm:h-[224.19px] max-sm:w-[358px] border-[#0000001A] border-[1px] rounded-[20px]">
  <div className="flex flex-col md:px-10 md:py-9 max-sm:px-5 max-sm:my-5">
    <div className="flex flex-row justify-between">
    <div className="flex flex-row  gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
              className="max-sm:w-[19.19px] max-sm:h-[19.19px]"
            />
          ))}
          <Image src="/half-star.svg" height={22.35} width={11.75} alt="star" className="max-sm:w-[9.13px] max-sm:h-[17.36px]"/></div>
          <Image src= "/Icons/dots.svg" alt="img" height={24} width={24} className="max-sm:hidden"></Image>
    </div>
    <div className="font-satoshi font-bold max-sm:text-[16px] text-[20px] leading-[22px] flex flex-row gap-2 py-2">Samantha D. <br />  <span>
      <Image src ="/Icons/verified.svg" alt ="verified-icon" height={19.5} width={19.5}  className="max-sm:w-[15.44px] max-sm:h-[15.44px]"></Image></span></div>
  <p className="font-satoshi font-normal text-[16px] leading-[22px] py-2 max-sm:text-[14px] text-[#00000099]">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
      <p className="font-satoshi font-medium max-sm:p-[2px] text-[16px] max-sm:text-[14px] text-[#00000099]">Posted on August 14, 2023</p>  
  </div>
</div>

<div className="w-[610px] h-[241.58px] max-sm:h-[224.19px] max-sm:w-[358px] border-[#0000001A] border-[1px] rounded-[20px]">
  <div className="flex flex-col md:px-10 md:py-9 max-sm:px-5 max-sm:my-5">
    <div className="flex flex-row justify-between">
    <div className="flex flex-row  gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
              className="max-sm:w-[19.19px] max-sm:h-[19.19px]"
            />
          ))}
          <Image src="/half-star.svg" height={22.35} width={11.75} alt="star" className="max-sm:w-[9.13px] max-sm:h-[17.36px]"/></div>
          <Image src= "/Icons/dots.svg" alt="img" height={24} width={24} className="max-sm:hidden"></Image>
    </div>
    <div className="font-satoshi font-bold max-sm:text-[16px] text-[20px] leading-[22px] flex flex-row gap-2 py-2 max-sm:py-[4px]">Alex M.<br />  <span>
      <Image src ="/Icons/verified.svg" alt ="verified-icon" height={19.5} width={19.5}  className="max-sm:w-[15.44px] max-sm:h-[15.44px]"></Image></span></div>
  <p className="font-satoshi font-normal text-[16px] leading-[22px] py-2 max-sm:py-[4px] max-sm:text-[14px] text-[#00000099]">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
      <p className="font-satoshi font-medium text-[16px] max-sm:p-[2px] max-sm:text-[14px] text-[#00000099]">Posted on August 15, 2023</p>  
  </div>
</div>

<div className="w-[610px] h-[241.58px] max-sm:h-[224.19px] max-sm:w-[358px] border-[#0000001A] border-[1px] rounded-[20px]">
  <div className="flex flex-col md:px-10 md:py-9 max-sm:px-5 max-sm:my-5">
    <div className="flex flex-row justify-between">
    <div className="flex flex-row  gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
              className="max-sm:w-[19.19px] max-sm:h-[19.19px]"
            />
          ))}
          <Image src="/half-star.svg" height={22.35} width={11.75} alt="star" className="max-sm:w-[9.13px] max-sm:h-[17.36px]"/></div>
          <Image src= "/Icons/dots.svg" alt="img" height={24} width={24} className="max-sm:hidden"></Image>
    </div>
    <div className="font-satoshi font-bold max-sm:text-[16px] text-[20px] leading-[22px] flex flex-row gap-2 py-[6px]">Ethan R.<br />  <span>
      <Image src ="/Icons/verified.svg" alt ="verified-icon" height={19.5} width={19.5}  className="max-sm:w-[15.44px] max-sm:h-[15.44px]"></Image></span></div>
  <p className="font-satoshi font-normal text-[16px] leading-[22px] max-sm:text-[14px] p-[2px] text-[#00000099]">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
      <p className="font-satoshi font-medium text-[16px] max-sm:text-[14px] text-[#00000099] ">Posted on August 16, 2023</p>  
  </div>
</div>

<div className="max-sm:hidden w-[610px] h-[241.58px] border-[#0000001A] border-[1px] rounded-[20px]">
  <div className="flex flex-col px-10 py-9">
    <div className="flex flex-row justify-between">
    <div className="flex flex-row  gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={22.35} width={11.75} alt="star" /></div>
          <Image src= "/Icons/dots.svg" alt="img" height={24} width={24}></Image>
    </div>
    <div className="font-satoshi font-bold text-[20px] leading-[22px] flex flex-row gap-2 py-2">Olivia P. <br />  <span>
      <Image src ="/Icons/verified.svg" alt ="verified-icon" height={19.5} width={19.5}></Image></span></div>
  <p className="font-satoshi font-normal text-[16px] leading-[22px] py-2 text-[#00000099]">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
      <p className="font-satoshi font-medium text-[16px] text-[#00000099]">Posted on August 17, 2023</p>  
  </div>
</div>

<div className="max-sm:hidden  w-[610px] h-[241.58px] border-[#0000001A] border-[1px] rounded-[20px]">
  <div className="flex flex-col px-10 py-9">
    <div className="flex flex-row justify-between">
    <div className="flex flex-row  gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
            />
          ))}
          </div>
          <Image src= "/Icons/dots.svg" alt="img" height={24} width={24}></Image>
    </div>
    <div className="font-satoshi font-bold text-[20px] leading-[22px] flex flex-row gap-2 py-2">Liam K.<br />  <span>
      <Image src ="/Icons/verified.svg" alt ="verified-icon" height={19.5} width={19.5}></Image></span></div>
  <p className="font-satoshi font-normal text-[16px] leading-[22px] py-2 text-[#00000099]">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
      <p className="font-satoshi font-medium text-[16px] text-[#00000099]">Posted on August 18, 2023</p>  
  </div>
</div>

<div className="max-sm:hidden w-[610px] h-[241.58px] border-[#0000001A] border-[1px] rounded-[20px]">
  <div className="flex flex-col px-10 py-9">
    <div className="flex flex-row justify-between">
    <div className="flex flex-row  gap-1">{/*row 2*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={24.71}
              width={24.71}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={22.35} width={11.75} alt="star" /></div>
          <Image src= "/Icons/dots.svg" alt="img" height={24} width={24}></Image>
    </div>
    <div className="font-satoshi font-bold text-[20px] leading-[22px] flex flex-row gap-2 py-2">Ava H.<br />  <span>
      <Image src ="/Icons/verified.svg" alt ="verified-icon" height={19.5} width={19.5}></Image></span></div>
  <p className="font-satoshi font-normal text-[16px] leading-[22px] py-2 text-[#00000099]">""I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
      <p className="font-satoshi font-medium text-[16px] text-[#00000099]">Posted on August 19, 2023</p>  
  </div>
</div>
</div>


<div className="flex justify-center items-center flex-col my-6">
<div className="flex justify-center items-center w-[230px] h-[52px] rounded-[62px] border-[1px] border-[#0000001A] text-center font-satoshi font-medium text-[16px] leading-[21.6px]  ">Load More Reviews</div>
<div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-[284px] ">
<h1 className="font-integralCF font-extrabold pt-10 max-sm:text-center max-sm:text-[32px] text-[48px] max-sm:leading-[36px] leading-[57.6px] uppercase">You might also like</h1>
</div>


     <div className="flex flex-row my-14 gap-4 max-sm:gap-2 max-sm:px-1 ">{/* main row div*/}
 <div className="flex flex-col  max-sm:gap-1 gap-2">{/* main col div*/}
 <div className="w-[295px] h-[298px] rounded-[20px] max-sm:w-[160px] max-sm:h-[185.01px] bg-[#F0EEED] flex justify-center items-center ">
    <Image src ="/blue.png" alt="shirt" height={200} width={200} className="max-sm:w-[140px] max-sm:h-[140px]"></Image>
  </div>
  <h3 className="font-bold max-sm:text-[16px] font-satoshi text-[20px] leading-[27px] ">Polo with Contrast Trims</h3>
  <div className="flex flex-row gap-1">{/*star div*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={15.47}
              width={15.47}
              alt="star"
            />
          ))}
          <span className="text-[#000000] max-sm:text-[12px] ml-5 max-sm:ml-2 font-satoshi text-[14px]">
            4.0/
          </span>
          <span className="text-slate-600 max-sm:text-[12px] font-satoshi text-[14px]">5</span>
        </div>{/*star div end*/}

        <div className="flex flex-row gap-3 ">{/*pricing */}
          <h5 className="font-satoshi font-bold text-[24px] max-sm:text-[20px] leading-[32.4px]">
            $212
          </h5>
          <h5 className="font-satoshi font-semibold line-through text-[24px] max-sm:text-[20px] leading-[32.4px] text-slate-400">
            $242
          </h5>
          <button className="w-[72px] max-sm:text-[10px] h-[34px] rounded-[62px] max-sm:w-[42px] max-sm:h-[20px] bg-[#FF33331A] text-[#FF3333] text-center text-[16px] font-satoshi">
            -20%
          </button>
          </div>{/*pricing end*/}
</div>{/*main col div end*/}

<div className="flex flex-col  max-sm:gap-1 gap-2">{/* main col div*/}
 <div className="w-[295px] h-[298px] rounded-[20px] max-sm:w-[160px] max-sm:h-[185.01px] bg-[#F0EEED] flex justify-center items-center ">
    <Image src ="/white.png" alt="shirt" height={200} width={200} className="max-sm:w-[140px] max-sm:h-[140px]"></Image>
  </div>
  <h3 className="font-bold max-sm:text-[16px] font-satoshi text-[20px] leading-[27px] ">Gradient Graphic T-shirt</h3>
  <div className="flex flex-row  gap-1">{/*star div*/}
          {[...Array(3)].map((_, idx) => (
            <Image 
              key={idx}
              src="/star.svg"
              height={15.47}
              width={15.47}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={16.72} width={8.79} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            3.5/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>{/*star div end*/}

          <h5 className="font-satoshi font-bold text-[24px] max-sm:text-[20px] leading-[32.4px]">
            $145
          </h5>

</div>{/*main col div end*/}

<div className="flex flex-col gap-2 max-sm:hidden">{/* main col div*/}
<div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center items-center ">
    <Image src ="/purple.png" alt="shirt" height={200} width={200}></Image>
  </div>
  <h3 className="font-bold font-satoshi text-[20px] leading-[27px] ">Polo with Tipping Details</h3>
  <div className="flex flex-row  gap-1">{/*star div*/}
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={18.49}
              width={18.49}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={16.72} width={8.79} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            4.0/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>{/*star div end*/}

        
          <h5 className="font-satoshi font-bold text-[24px] leading-[32.4px]">
            $180
          </h5>
        
</div>{/*main col div end*/}

<div className="flex flex-col gap-2 max-sm:hidden">{/* main col div*/}
<div className="w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED] flex justify-center items-center ">
    <Image src ="/line.png" alt="shirt" height={200} width={200}></Image>
  </div>
  <h3 className="font-bold font-satoshi text-[20px] leading-[27px] ">Black Striped T-shirt</h3>
  <div className="flex flex-row  gap-1">{/*star div*/}
          {[...Array(5)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={18.49}
              width={18.49}
              alt="star"
            />
          ))}
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            5.0/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>{/*star div end*/}

        <div className="flex flex-row gap-3 ">{/*pricing */}
          <h5 className="font-satoshi font-bold text-[24px] leading-[32.4px]">
            $120
          </h5>
          <h5 className="font-satoshi font-semibold line-through text-[24px] leading-[32.4px] text-slate-400">
            $150
          </h5>
          <button className="w-[72px] h-[34px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-center text-[16px] font-satoshi">
            -30%
          </button>
          </div>{/*pricing end*/}
</div>{/*main col div end*/}

     </div>{/*main row div end*/}

</div>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
      )
}

export default product
