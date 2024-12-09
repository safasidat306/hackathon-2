<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2,3,4&display=swap" rel="stylesheet"></link>
import React from 'react'
import { VectorIcon , SearchIcon , CartIcon , ProfileIcon , ListIcon ,SearchIcon2} from '@/app/Icons/icons'
import { integralCF } from '@/app/fonts'
export default function Header() {
  return (
  <div>
    <div className='w-screen bg-black px-3 h-[38px] flex justify-center items-center'>
      <div className='text-white text-center font-satoshi text-[14px] font-[400px] max-sm:text-[12px] '>Sign up and get 20% off to your first order.<b className='max-sm:text-[12px] font-[500px] font-satoshi underline ml-1 leading-[18.9px]'> Sign Up Now</b></div>
    </div>
<div className='w-screen max-sm:h-[24px] h-[48px] my-[20px] gap-[40px] flex justify-center items-center '>
    <div className='md:flex gap-8 md:justify-between max-xs:gap-[115px] max-sm:gap-32 max-sm:flex max-sm:justify-between '>
        <div className='max-sm:float-left flex flex-row font-bold gap-2 max-sm:text-[25.2px] md:text-[32px] text-black max-sm:text-left'><div className='md:hidden lg:hidden flex justify-center items-center '><ListIcon/></div>SHOP.CO</div>
        <div className='gap-[24px] flex flex-row justify-center items-center max-sm:hidden '>
            <div className='flex flex-row text-[16px] font-satoshi font-[400px] leading-21.6px '>Shop<VectorIcon/></div>
            <div className='flex flex-row text-[16px] font-satoshi font-[400px] leading-21.6px'>On Sale</div>
            <div className='flex flex-row text-[16px] font-satoshi font-[400px] leading-21.6px'>New Arrivals</div>
            <div className='flex flex-row text-[16px] font-satoshi font-[400px] leading-21.6px'>Brands</div>
        </div>
        <div className='bg-[#F0F0F0] w-[577px] h-[48px] rounded-[62px] flex items-center pl-6  max-sm:hidden '><SearchIcon/><p className='ml-2 font-satoshi text-slate-400 leading-[21.6px] text-[16px] '>Search for products...</p></div>
        <div className='flex justify-center items-center md:gap-2 max-sm:gap-1 '>
            <div className='md:hidden lg:hidden'><SearchIcon2/></div>
            <div><CartIcon/> </div>
            <div><ProfileIcon/></div>
        </div>
    </div>
</div>
<div className='flex justify-center items-center'>
<div className='w-[1240px] border-[1px] border-slate-200 flex justify-center items-center '></div></div>
    </div>
  )
}


