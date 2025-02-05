"use client";
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2,3,4&display=swap" rel="stylesheet"></link>
import React from 'react';
import Header from '../components/Header123/Header';
import Image from 'next/image';
import Footer from '../components/Footer123/Footer';

interface Product {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
    imageUrl: "/white.png",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
    imageUrl: "/3.png",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
    imageUrl: "/2.png",
  },
];

const handleQuantityChange = (id: number, change: number) => {
  const product = products.find((p) => p.id === id);
  if (product) {
    product.quantity = Math.max(1, product.quantity + change);
    console.log("Updated Products:", products);
  }
};

const calculateSummary = () => {
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return { subtotal, discount, deliveryFee, total };
};

const page = () => {
  const { subtotal, discount, deliveryFee, total } = calculateSummary();

  return (
    <div>
      <Header />
      <div className='flex flex-col lg:flex-row max-sm:justify-center'>
        <div className='flex flex-col lg:w-3/5'>
          <div className='flex flex-row gap-2 max-sm:px-3 max-sm:pt-6 md:px-16 md:pt-7 justify-start'>
            <span className='text-[16px] font-satoshi text-[#00000099] '>Home</span>
            <Image src="/Icons/go.svg" alt="go" height={6.5} width={7.5} />
            <span className='text-[16px] font-satoshi '>Cart </span>
          </div>
          <div>
            <h1 className='justify-start max-sm:text-[32px] max-sm:font-integralCF max-sm:px-3 max-sm:py-2 max-sm:font-extrabold sm:text-[40px] sm:font-integralCF sm:px-16 sm:py-3 sm:font-extrabold '>
              YOUR CART
            </h1>
          </div>
          <div className='max-sm:flex max-sm:justify-center max-sm:items-center'>
            <div className='max-sm:h-[520px] max-sm:w-[358px] sm:h-[490px] sm:w-[715px] sm:mx-16 mb-8 border-[1px] border-[#0000001A] max-sm:mx-3 rounded-[20px]'>
              <div style={{ padding: "5px", fontFamily: "satoshi" }}>
                {products.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      borderBottom: "1px solid",
                      borderBottomColor: "#0000001A",
                      padding: "10px",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div className='flex flex-row gap-2 max-sm:text-[16px]'>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          style={{ width: "120px", height: "120px", borderRadius: "20px" }}
                          className='img'
                        />
                        <div className='flex flex-col'>
                          <h3 className='text-[20px] font-extrabold '>{product.name}</h3>
                          <p className='text-[14px] font-medium'>Size: <span className='text-[#00000099] '>{product.size}</span></p>
                          <p className='text-[14px] font-medium'>Color: <span className='text-[#00000099] font-medium '>{product.color}</span></p>
                          <p>
                            <strong className='sm:text-[24px] font-extrabold font-satoshi max-sm:text-[20px] '>${product.price}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col gap-10  '>
                      <div className='flex justify-end mx-3'>
                        <Image src ="/Icons/bin.svg" alt="delete-your-item" width={18} height={19.5}></Image>
                      </div>
                    <div className='sm:w-[126px] max-sm:w-[105px] h-[44px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center'>
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        style={{ marginRight: "10px" }}
                      >
                        <p className='text-[40px] sm:-mt-2'>-</p>
                      </button>
                      {product.quantity}
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        style={{ marginLeft: "10px" }}
                      >
                        <p className='text-[25px]'>+</p>
                      </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      
        <div className='lg:w-2/5 p-6 h-[458px] md:mt-[135px] border border-[#0000001A] rounded-[20px] max-sm:mx-3 max-sm:mt-6 sm:mx-16 sm:mt-0'>
          <h2 className='text-[24px] font-extrabold font-satoshi mb-4'>Order Summary</h2>
          <div className='flex justify-between text-[16px] mb-2'>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between text-[16px] mb-2'>
            <span>Discount (20%)</span>
            <span className='text-red-500'>-${discount.toFixed(2)}</span>
          </div>
          <div className='flex justify-between text-[16px] mb-2'>
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <hr className='my-4 border-t-[1px] border-[#0000001A]' />
          <div className='flex justify-between text-[18px] font-bold'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Add promo code'
              className='w-full h-[44px] border border-[#0000001A] rounded-[10px] px-4'
            />
            <button className='w-full h-[44px] bg-black text-white rounded-[10px] mt-2'>Apply</button>
          </div>
          <button className='w-full h-[44px] bg-black text-white rounded-[10px] mt-4'>Go to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

 