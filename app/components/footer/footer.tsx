<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2,3,4&display=swap" rel="stylesheet"></link>
import React from 'react';
import { InboxIcon, TwitterIcon, FacebookIcon, InstaIcon, LinkedInIcon } from '@/app/Icons/icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <div >
      <div className="flex justify-center items-center px-4 max-sm:-mb-24 md:-mb-20">
        <div className="bg-black w-full max-w-[1240px] h-auto rounded-[20px] flex flex-col md:flex-row justify-between items-center px-6 py-6 md:px-[64px] md:py-[40px]">
          <p className="text-white font-bold text-[24px] md:text-[40px] text-center md:text-left mb-6 md:mb-0 w-full md:w-[551px] font-integral">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="w-full md:w-[349px] h-[48px] bg-white rounded-[62px] gap-2 text-slate-400 font-satoshi text-[16px] pl-4 flex items-center">
              <InboxIcon />
              <p>Enter your email address</p>
            </div>
            <button className="w-full md:w-[349px] h-[48px] bg-white rounded-[62px] font-satoshi text-[16px] font-medium flex justify-center items-center">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full bg-[#F0F0F0] flex flex-col md:flex-row md:h-[499px] max-sm:h-[846px] justify-center items-center gap-14 md:gap-32 px-4 md:py-16">
        <div className="flex flex-col gap-6 items-start">
          <div className="font-integral font-extrabold text-[25.2px] md:text-[32px] text-black">SHOP.CO</div>
          <p className="text-slate-600 font-satoshi text-[14px] md:text-[16px]">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex gap-2">
            <div className="bg-white border border-slate-300 p-2 rounded-full flex items-center justify-center">
              <TwitterIcon />
            </div>
            <div className="bg-black border border-slate-300 p-2 rounded-full flex items-center justify-center">
              <FacebookIcon />
            </div>
            <div className="bg-white border border-slate-300 p-2 rounded-full flex items-center justify-center">
              <InstaIcon />
            </div>
            <div className="bg-white border border-slate-300 p-2 rounded-full flex items-center justify-center">
              <LinkedInIcon />
            </div>
          </div>
        </div>

        <div className="grid max-md:-mt-11  grid-cols-2 md:grid-cols-4 gap-2 w-full">
          <div className="flex flex-col gap-4">
            <p className="font-satoshi font-medium text-[16px]">COMPANY</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">About</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Features</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Works</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Career</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-satoshi font-medium text-[16px]">HELP</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Customer Support</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Delivery Details</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Terms & Conditions</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Privacy Policy</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-satoshi font-medium text-[16px]">FAQ</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Account</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Manage Deliveries</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Orders</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Payments</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-satoshi font-medium text-[16px]">RESOURCES</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Free eBooks</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Development Tutorial</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">How to - Blog</p>
            <p className="font-satoshi text-[14px] md:text-[16px] text-slate-500">Youtube Playlist</p>
          </div>
        </div>
      </div>

      <div className="border-t bg-[#F0F0F0] border-slate-300 py-4 flex flex-col md:flex-row justify-between items-center px-4">
        <p className="font-satoshi text-[14px] text-slate-700 text-center md:text-left">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Image src="/Visa.svg" alt="Visa" width={32.54} height={10.51} className="rounded" />
          <Image src="/mastercard.svg" alt="MasterCard" width={25.38} height={15.69} className="rounded" />
          <Image src="/paypal.svg" alt="PayPal" width={34.55} height={9.21} className="rounded" />
          <Image src="/applePay.svg" alt="Apple Pay" width={26.41} height={11.21} className="rounded" />
          <Image src="/googlePay.svg" alt="Google Pay" width={28.56} height={11.21} className="rounded" />
        </div>
      </div>
    </div>
  );
}
