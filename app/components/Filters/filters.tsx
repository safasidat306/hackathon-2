"use client";
import React from "react";
import Image from 'next/image'
import ColorSelector from '../Colors/Colors '
import Slider from '../slider/slider'
interface FiltersProps {
  onClose: () => void; 
  isFilterBarOpen: boolean; 
}

const Filters: React.FC<FiltersProps> = ({ onClose ,isFilterBarOpen }: FiltersProps) => {

  return (
    <section id = "filters">
    <div className= "flex flex-col gap-8 md:my-7  max-sm:mb-1 max-sm:justify-center max-sm:-mt-4 max-sm:items-center md:justify-center md:items-center" >


<div className="flex flex-row gap-3 md:-ml-44 max-sm:-ml-60">{/*1st row*/}
            
            <p className="text-[#00000099] font-satoshi font-[400px] text-[16px] md:leading-[21.6px] max-sm:hidden">Home</p>
            <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5 max-sm:hidden" />
            <p className="text-[black] font-satoshi font-[400px] text-[16px] leading-[21.6px] max-sm:hidden">Casual</p>
          </div>
          {/*1st row end*/}


      <div className="md:w-[295px] max-sm:w-[340px] h-[1205px] rounded-[20px] gap-6 md:border-[1px] md:border-[#0000001A] ">
            <div className="flex flex-row justify-between px-6 md:py-4 ">
              <p className="font-bold font-satoshi text-[20px] leading-[27px]">Filters</p>
              <Image src="/Icons/filter.svg" alt="filter-icons" height={18.75} width={20.25} className="max-sm:hidden" />
              <Image src="/Icons/cross2.svg" alt="filter-icons" height={15.25} width={15.25} className="md:hidden cursor-pointer"
              onClick={onClose} />
            </div>

            {/*line*/}
            <div className=" flex justify-center items-center mt-[5px] max-sm:hidden">
              <div className="w-[247px] border-[1px] border-[#0000001A] " />
            </div>

            {/*options*/}
            <div className="px-6 md:py-4 ">
              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">T-shirts</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Shorts</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Shirts</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Hoodie</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Jeans</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>
            </div>

            {/*line*/}
            <div className="flex justify-center items-center max-sm:hidden">
              <div className="w-[247px] border-[1px] border-[#0000001A]" />
            </div>

            {/*price*/}
            <div className="flex flex-col px-6 md:py-5 ">
              <div className="flex justify-between">
                <p className="font-satoshi font-bold text-[20px]">Price</p>
                <Image src="/Icons/up.svg" alt="filter-icons" height={6.5} width={11.5} />
              </div>
              <Slider />
            </div>
      
            {/*colors*/}
           <div className=''>
            <ColorSelector /></div>

            {/*line*/}
            <div className="flex justify-center items-center max-sm:hidden">
              <div className="w-[247px] border-[1px] border-[#0000001A]" />
            </div>

          {/*size*/}
          <div className=' flex flex-col md:px-6 max-sm:px-2 md:py-5'>
          <div className="flex justify-between">
                <p className="font-satoshi font-bold text-[20px] max-sm:pl-4">Size</p>
                <Image src="/Icons/up.svg" alt="filter-icons" height={6.5} width={11.5} />
              </div>
              <div className='flex flex-wrap my-3 md:gap-4 max-sm:gap-2'>
          <button className='bg-[#F0F0F0] w-[96px] h-[39px] rounded-[62px] text-[#00000099] '>XX-Small</button>
          <button className='bg-[#F0F0F0] w-[88px] h-[39px] rounded-[62px] text-[#00000099] '>X-Small</button>
          <button className='bg-[#F0F0F0] w-[74px] h-[39px] rounded-[62px] text-[#00000099] '>Small</button>          
          <button className='bg-[#F0F0F0] w-[90px] h-[39px] rounded-[62px] text-[#00000099] '>Medium</button>
          <button className='bg-[black] text-white w-[76px] h-[39px] rounded-[62px] '>Large</button>
          <button className='bg-[#F0F0F0] w-[89px] h-[39px] rounded-[62px] text-[#00000099] '>X-Large</button>
          <button className='bg-[#F0F0F0] w-[98px] h-[39px] rounded-[62px] text-[#00000099] '>XX-Large</button>
          <button className='bg-[#F0F0F0] w-[97px] h-[39px] rounded-[62px] text-[#00000099] '>3X-Large</button>
          <button className='bg-[#F0F0F0] w-[98px] h-[39px] rounded-[62px] text-[#00000099] '>4X-Large</button>
    </div>
          </div>

            {/*line*/}
            <div className="flex justify-center items-center max-sm:hidden">
              <div className="w-[247px] border-[1px] border-[#0000001A]" />
            </div>

          {/*dresStyle*/}
          <div className='flex flex-col px-6 md:py-5'>
          <div className="flex justify-between">
                <p className="font-satoshi font-bold text-[20px]">Dress Style</p>
                <Image src="/Icons/up.svg" alt="filter-icons" height={6.5} width={11.5} />
              </div>

              <div className="md:py-2">
              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Casual</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Formal</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Party</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>

              <div className="flex flex-row justify-between md:py-1">
                <p className="text-[#00000099] font-satoshi text-[16px]">Gym</p>
                <Image src="/Icons/go.svg" alt="next" height={11.5} width={6.5} className="mt-1 max-sm:mt-0.5" />
              </div>
            </div>
          </div>

{/*Apply Filters*/}
        <div className='flex justify-center items-center'>
          <button className='w-[247px] md:h-[48px] max-sm:h-[30px] max-sm:w-[150px] bg-black rounded-[62px] text-white text-center '>Apply Filter</button>
          </div>
          {/* {isfiltersOpen && (
        <div
          onClick={() => setIsfiltersOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )} */}

</div>
    </div>
    </section>
  )
};
export default Filters;

