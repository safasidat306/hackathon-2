<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2,3,4&display=swap" rel="stylesheet"></link>
import React from 'react'
import Header from '../components/header/header';
import Image from 'next/image';
import Logos from '../components/Logos/page';
import { Left, Right, Tick } from "@/app/Icons/icons";
import Footer from '../components/footer/footer';

const page = () => {
  return (
    <div>
        <Header/>
        {/*hero*/}
          <div className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h2 className= "text-4xl lg:text-[64px] lg:mt-16 font-bold font-integralCF lg:leading-[62px] mb-5 lg:mb-8 md:pl-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 font-satoshi text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px] md:pl-8">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <ul className='list-style-none '>
                    <li><a href = "/CategoryPage" className="w-full md:ml-8 md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now</a></li>
              
            </ul>
          </div>
          <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:hidden md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base md:hidden text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <span className="ml-6 md:ml-0 h-12 md:h-full bg-black/10 " />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:hidden md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs md:hidden xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <span className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"  />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold md:hidden text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                30,000+
              </span>
              <span className="text-xs md:hidden xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute max-sm:hidden right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          
          <Image src="/img.jpeg" alt="img" height={700} width={700} className='md:-mt-12'></Image>

          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute max-sm:hidden left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11  md:max-h-14 animate-[spin_3s_infinite]"
          />
        </section>
      </div>
    </div>
   <Logos/>

   {/*New Arrival*/}
   <section id="NewArrivals">
   <div className="mt-48">
  <div>
    <h1 className="flex justify-center items-center font-extrabold  max-sm:text-[32px] max-sm:pt-12 md:text-[48px] leading-[57.6px] font-integralCF mb-10 text-center sm:text-[36px] sm:leading-[43.2px]">
      NEW ARRIVALS
    </h1>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <div className="flex flex-col gap-1 items-center">
        <div className="w-[295px] h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
          <Image src="/1.png" height={100} width={250} alt="T-shirt" />
        </div>
        <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-center">
          T-SHIRT WITH TAPE DETAILS
        </h3>
        <div className="flex flex-row justify-center gap-1">
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={15}
              width={15}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={7.5} width={7.5} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            4.5/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>
        <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px] text-center">
          $120
        </h5>
      </div>

      {/* Repeat for Other Cards */}
      {/* Card 2 */}
      <div className="flex flex-col gap-1 items-center">
        <div className="w-[295px] h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
          <Image src="/2.png" height={100} width={250} alt="Jeans" />
        </div>
        <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-center">
          SKINNY FIT JEANS
        </h3>
        <div className="flex flex-row justify-center gap-1">
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={15}
              width={15}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={7.5} width={7.5} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            3.5/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>
        <div className="flex flex-row gap-3 justify-center">
          <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">
            $240
          </h5>
          <h5 className="font-satoshi font-semibold line-through text-[24px] leading-[27.6px] text-slate-400">
            $260
          </h5>
          <button className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-center text-[12px] font-satoshi">
            -20%
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col gap-1 items-center">
        <div className="w-[295px] h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
          <Image src="/3.png" height={100} width={230} alt="Shirt" />
        </div>
        <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-center">
          CHECKERED SHIRT
        </h3>
        <div className="flex flex-row justify-center gap-1">
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={15}
              width={15}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={7.5} width={7.5} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            4.5/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>
        <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px] text-center">
          $180
        </h5>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col gap-1 items-center">
        <div className="w-[295px] h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
          <Image src="/4.png" height={100} width={250} alt="Striped T-shirt" />
        </div>
        <h3 className="font-satoshi font-bold text-[20px] leading-[27px] text-center">
          SLEEVE STRIPED T-SHIRT
        </h3>
        <div className="flex flex-row justify-center gap-1">
          {[...Array(4)].map((_, idx) => (
            <Image
              key={idx}
              src="/star.svg"
              height={15}
              width={15}
              alt="star"
            />
          ))}
          <Image src="/half-star.svg" height={7.5} width={7.5} alt="star" />
          <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
            4.5/
          </span>
          <span className="text-slate-600 font-satoshi text-[14px]">5</span>
        </div>
        <div className="flex flex-row gap-3 justify-center">
          <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">
            $130
          </h5>
          <h5 className="font-satoshi font-semibold line-through text-[24px] leading-[27.6px] text-slate-400">
            $160
          </h5>
          <button className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-center text-[12px] font-satoshi">
            -30%
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-center gap-16 items-center my-8">
    <button className="w-[218px] h-[52px] rounded-[62px] border-[1px] border-slate-200 text-center font-satoshi font-medium text-[16px] leading-[21.6px]">
      View All
    </button>
    <div className="w-full border-[1px] bg-slate-300"></div>
  </div>
</div>
</section>

{/*Top Selling*/}
<div className="mt-16 mx-6">
  <h1 className="flex justify-center items-center font-extrabold max-sm:text-[32px] md:text-[48px] leading-[57.6px] font-integralCF mb-10">
    TOP SELLING
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
    {/* Card 1 */}
    <div className="flex flex-col gap-1">
      <div className="w-full h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
        <Image src="/5.png" height={100} width={250} alt="dress" />
      </div>
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px]">
        VERTICAL STRIPED SHIRT
      </h3>
      <div className="flex flex-row">
        {/* Stars */}
        {[...Array(5)].map((_, i) => (
          <Image key={i} src="/star.svg" height={15} width={15} alt="star" />
        ))}
        <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
          5.0/
        </span>
        <span className="text-slate-600 font-satoshi text-[14px]">5</span>
      </div>
      <div className="flex flex-row gap-3">
        <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">
          $212
        </h5>
        <h5 className="font-satoshi font-semibold text-[24px] leading-[27.6px] text-slate-400 line-through">
          $232
        </h5>
        <button className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-center text-[12px] font-satoshi">
          -30%
        </button>
      </div>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col gap-1">
      <div className="w-full h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
        <Image src="/6.png" height={50} width={250} alt="dress" />
      </div>
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px]">
        COURAGE GRAPHIC T-SHIRT
      </h3>
      <div className="flex flex-row">
        {[...Array(4)].map((_, i) => (
          <Image key={i} src="/star.svg" height={15} width={15} alt="star" />
        ))}
        <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
          4.0/
        </span>
        <span className="text-slate-600 font-satoshi text-[14px]">5</span>
      </div>
      <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">
        $145
      </h5>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col gap-1">
      <div className="w-full h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
        <Image src="/7.png" height={50} width={200} alt="dress" />
      </div>
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px]">
        LOOSE FIT BERMUDA SHORTS
      </h3>
      <div className="flex flex-row">
        {[...Array(3)].map((_, i) => (
          <Image key={i} src="/star.svg" height={15} width={15} alt="star" />
        ))}
        <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
          3.0/
        </span>
        <span className="text-slate-600 font-satoshi text-[14px]">5</span>
      </div>
      <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">
        $80
      </h5>
    </div>
    {/* Card 4 */}
    <div className="flex flex-col gap-1">
      <div className="w-full h-[298px] flex justify-center items-center rounded-[20px] bg-[#F0EEED] mb-3">
        <Image src="/8.png" height={150} width={150} alt="dress" />
      </div>
      <h3 className="font-satoshi font-bold text-[20px] leading-[27px]">
        FADED SKINNY JEANS
      </h3>
      <div className="flex flex-row">
        {[...Array(4)].map((_, i) => (
          <Image key={i} src="/star.svg" height={15} width={15} alt="star" />
        ))}
        <Image src="/half-star.svg" height={7.5} width={7.5} alt="star" />
        <span className="text-[#000000] ml-5 font-satoshi text-[14px]">
          4.5/
        </span>
        <span className="text-slate-600 font-satoshi text-[14px]">5</span>
      </div>
      <h5 className="font-satoshi font-bold text-[24px] leading-[27.6px]">
        $210
      </h5>
    </div>
  </div>
  {/* View All Button */}
  <div className="flex justify-center items-center my-8">
    <button className="w-[218px] h-[52px] rounded-[62px] border-[1px] border-slate-200 text-center font-satoshi font-medium text-[16px] leading-[21.6px]">
      View All
    </button>
  </div>
</div>


{/*Dress Style*/}
<div>
    <div className='flex justify-center max-md:hidden '>
      <div className='w-[1209px] h-[866px] bg-[#F0F0F0] rounded-[40px] '>
            <h1 className='flex justify-center pt-20 pb-8 font-extrabold text-[48px] leading-[57.6px] font-integralCF mb-10 '>BROWSE BY DRESS STYLE
            </h1>
            <div className='flex flex-row justify-center items-center gap-3'>
                <div className='w-[407px] h-[289px] rounded-[20px] bg-white flex justify-between '>
                    <h2 className='px-6 py-6 text-[36px] font-satoshi font-bold'>Casual</h2>
                    <Image src = "/9.png" alt = "img" height={250} width={250}></Image>
                </div>
                <div className='w-[684px] h-[289px] rounded-[20px] bg-white flex justify-between'><h2 className='px-6 py-6 text-[36px] font-satoshi font-bold'>Formal</h2>
                <Image src = "/10.png" alt = "img" height={450} width={450}></Image></div>
            </div>
            <div className='flex flex-row justify-center items-center my-3 gap-3'>
            <div className='w-[684px] h-[289px] rounded-[20px] bg-white flex justify-between'><h2 className='px-6 py-6 text-[36px] font-satoshi font-bold'>Party</h2>
            <Image src = "/11.png" alt = "img" height={450} width={450}></Image></div>
                <div className='w-[407px] h-[289px] rounded-[20px] bg-white flex justify-between'><h2 className='absolute px-6 py-6 text-[36px] font-satoshi font-bold'>Gym</h2>
                <Image src = "/12.png" alt = "img" height={250} width={360} className='ml-12'></Image></div>
            </div>
      </div>
    </div>
</div>

{/*For Mob Screens*/}
<div className='md:hidden flex justify-center mx-3'>
  <div className='h-[975px]  w-[358px] rounded-[20px] bg-[#F0F0F0] px-3 '>
   <h1 className=' flex justify-center text-center font-bold text-[32px] leading-[36px] font-integralCF py-4'>BROWSE BY DRESS STYLE</h1>
<div className='flex justify-center items-center'>
    <div className=' flex w-[310px] h-[190px] bg-white rounded-[20px] justify-between '>
    <h2 className='px-6 py-6 text-[24px] font-satoshi font-bold'>Casual</h2>
    <Image src = "/9.png" alt = "img" height={100} width={250} className='rounded-[20px]'></Image>
    </div>
    </div>

    <div className='flex justify-center items-center py-3'>
    <div className=' flex w-[310px] h-[190px] bg-white rounded-[20px] justify-between '>
    <h2 className='px-6 py-6 text-[24px] font-satoshi font-bold'>Formal</h2>
    <Image src = "/10.png" alt = "img" height={50} width={190} className='rounded-[20px]'></Image>
    </div>
    </div>

    <div className='flex justify-center items-center '>
    <div className=' flex w-[310px] h-[190px] bg-white rounded-[20px] justify-between '>
    <h2 className='px-6 py-6 text-[24px] font-satoshi font-bold'>Party</h2>
    <Image src = "/11.png" alt = "img" height={150} width={190} className='rounded-[20px]'></Image>
    </div>
    </div>

    <div className='flex justify-center items-center py-3'>
    <div className=' flex w-[310px] h-[190px] bg-white rounded-[20px] justify-between '>
    <h2 className='px-6 py-6 text-[24px] font-satoshi font-bold'>Gym</h2>
    <Image src = "/12.png" alt = "img" height={50} width={190} className='rounded-[20px]'></Image>
    </div>
    </div>

  </div>
</div>



{/*Reviews*/}
<div className="my-20 px-4 lg:px-16">
      {/* Heading and Navigation */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-extrabold text-[32px] lg:text-[48px] leading-tight font-integralCF mb-6 lg:mb-10 text-center lg:text-left">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="max-md:hidden flex flex-row gap-4">
          <Left />
          <Right />
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center items-center gap-5">
        {/* Card 1 */}
        <div className="flex flex-col w-[400px] h-[240px] border border-slate-300 rounded-[20px] p-6">
          <div className="flex flex-row gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                height={20}
                width={20}
                alt="star"
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center mb-2">
            <h3 className="text-[20px] font-satoshi font-bold">Sarah M.</h3>
            <Tick />
          </div>
          <p className="text-slate-500 text-[16px] font-satoshi leading-[22px]">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-[400px] h-[240px] border border-slate-300 rounded-[20px] p-6">
          <div className="flex flex-row gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                height={20}
                width={20}
                alt="star"
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center mb-2">
            <h3 className="text-[20px] font-satoshi font-bold">Alex K.</h3>
            <Tick />
          </div>
          <p className="text-slate-500 text-[16px] font-satoshi leading-[22px]">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-[400px] h-[240px] border border-slate-300 rounded-[20px] p-6">
          <div className="flex flex-row gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                height={20}
                width={20}
                alt="star"
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center mb-2">
            <h3 className="text-[20px] font-satoshi font-bold">James L.</h3>
            <Tick />
          </div>
          <p className="text-slate-500 text-[16px] font-satoshi leading-[22px]">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>

<Footer/>
    </div>
  )
}

export default page
