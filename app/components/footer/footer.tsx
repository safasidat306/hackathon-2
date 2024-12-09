import React from 'react'
import { InboxIcon , TwitterIcon , FacebookIcon , InstaIcon , LinkedInIcon } from '@/app/Icons/icons'
import Image from 'next/image'
export default function Footer () {
  return (
    <div>
      <div className='flex justify-center items-center  '>
      <div className='bg-black w-[1240px] h-[180px] rounded-[20px] flex justify-between items-center px-[64px] '>
        <p className='text-white font-bold text-[40px] w-[551px] font-integral '>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
        <div className='flex flex-col gap-[14px] justify-center items-center'>
          <div className='w-[349px] h-[48px] bg-white rounded-[62px] gap-2 text-slate-400 font-satoshi text-[16px] pl-4 flex items-center '><InboxIcon/><p>Enter your email address</p></div>
          <div className='w-[349px] h-[48px] bg-white rounded-[62px] font-satoshi text-[16px] font-[500px] flex justify-center items-center '>Subscribe to Newsletter</div>
        </div>
      </div>
    </div>
    <div>
      <div className='w-screen h-[499px] bg-[#F0F0F0] gap-32 -mt-24 flex flex-row justify-center items-center '>
        <div className='flex flex-col gap-[25px]'><div className='max-sm:float-left font-integral flex flex-row font-bold gap-2 max-sm:text-[25.2px] md:text-[32px] text-black max-sm:text-left'>SHOP.CO</div>
        <p className='w-[248px] text-slate-600 font-satoshi '>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className='flex flex-row gap-2'>
        <div className='bg-white border-[1px] border-slate-300 px-2 py-2 rounded-full flex justify-center items-center'><TwitterIcon/></div>
        <div className='bg-black border-[1px] border-slate-300 px-2 py-1 rounded-full flex justify-center items-center'><FacebookIcon/></div>
        <div className='bg-white border-[1px] border-slate-300 px-2 py-2 rounded-full flex justify-center items-center'><InstaIcon/></div>
        <div className='bg-white border-[1px] border-slate-300 px-2 py-2 rounded-full flex justify-center items-center'><LinkedInIcon/></div>
        </div>
        </div>
        <div className="flex flex-col justify-center font-satoshi font-[500px] text-[16px] leading-[18px] gap-4"><p>COMPANY</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>About</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Features</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Works</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Career </p>
        </div>

        <div className="flex flex-col justify-center font-satoshi font-[500px] text-[16px] leading-[18px] gap-4"><p>HELP</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Customer Support</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Delivery Details</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Terms & Conditions</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Privacy Policy</p>
        </div>


        <div className="flex flex-col justify-center font-satoshi font-[500px] text-[16px] leading-[18px] gap-4"><p>FAQ</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Account</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Manage Deliveries</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Orders</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Payments</p>
        </div>

        <div className="flex flex-col justify-center font-satoshi font-[500px] text-[16px] leading-[18px] gap-4"><p>RESOURCES</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Free eBooks</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Development Tutorial</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>How to - Blog</p>
        <p className='font-satoshi font-[400px] text-[16px] leading-[18px] text-slate-500'>Youtube Playlist</p>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center -mt-24'>
      <div className='w-[1240px] border-[1px] border-slate-300 flex justify-center items-center '></div>
      </div>

<div className='flex flex-row justify-center items-center lg:gap-[700px] '>
<div className='font-satoshi font-[400px] text-[14px] text-slate-800 py-8'>Shop.co © 2000-2023, All Rights Reserved</div>
<div className='flex flex-row gap-4'>
  <div className='flex justify-center items-center w-[46.61px] h-[30.03px] rounded-[5.38px] bg-white py-2 px-2'><Image src="/Visa.svg" alt="img" height={10.51} width={32.54}></Image></div>
  <div className='flex justify-center items-center w-[46.61px] h-[30.03px] rounded-[5.38px] bg-white'><Image src="/mastercard.svg" alt="img" height={15.69} width={25.38}></Image></div>
  <div className='flex justify-center items-center w-[46.61px] h-[30.03px] rounded-[5.38px] bg-white'><Image src="/paypal.svg" alt="img" height={9.21} width={34.55}></Image></div>
  <div className='flex justify-center items-center w-[46.61px] h-[30.03px] rounded-[5.38px] bg-white'><Image src="/applePay.svg" alt="img" height={11.21} width={26.41}></Image></div>
  <div className='flex justify-center items-center w-[46.61px] h-[30.03px] rounded-[5.38px] bg-white'><Image src="/googlePay.svg" alt="img" height={11.21} width={28.56}></Image></div>
</div>
</div>
    </div>
    </div>
  ) 
}