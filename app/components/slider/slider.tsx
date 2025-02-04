import React from 'react'

const slider = () => {
  return (
    <div>
      <div className='mt-3'>
        <div className='w-[247px] border-[#F0F0F0] flex justify-center items-center bg-[#F0F0F0] border-[1px] h-[6px] '>
          <div className='flex flex-row justify-between w-[150.29px] h-[6px] rounded-[20px] bg-[black] '>
            <div className='w-[20px] h-[20px] rounded-full bg-black -mt-[6px]'></div>
            <div className='w-[20px] h-[20px] rounded-full bg-black -mt-[6px]'></div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-2'>
        <div className='flex flex-row justify-between w-[150.29px]'>
            <p className='font-satoshi font-medium'>$50</p>
            <p className='font-satoshi font-medium'>$200</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default slider
