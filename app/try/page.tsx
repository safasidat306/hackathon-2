"use client";
import React, { useState } from 'react';
import Filters from '../components/Filters/filters'
import Image from 'next/image'

const Try = () => {
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const toggleFilterBar = () => {
    setIsFilterBarOpen(!isFilterBarOpen); }

  return (
    <div>
      <div className='w-[32px] h-[32px] bg-[#F0F0F0] rounded-full flex justify-center items-center '  onClick={toggleFilterBar}>
                          <Image src = "/Icons/filter.svg" alt ="filter-iocn" height={12.5} width={13.5} ></Image>
                        </div>
                        {isFilterBarOpen && <Filters />} {/* Conditional Rendering */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
          isFilterBarOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
      </div>
    </div>
  )
}

export default Try

// import React, { useState } from 'react';
// import Filters from '../components/Filters/filters';
// import Image from 'next/image';

// const Try = () => {
//   const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

//   const toggleFilterBar = () => {
//     setIsFilterBarOpen(!isFilterBarOpen);
//   };

//   return (
//     <div>
//       <div
//         className="w-[32px] h-[32px] bg-[#F0F0F0] rounded-full flex justify-center items-center"
//         onClick={toggleFilterBar}
//       >
//         <Image src="/Icons/filter.svg" alt="filter-iocn" height={12.5} width={13.5} />
//       </div>

//       <div
//         className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-all duration-300 ${
//           isFilterBarOpen ? 'translate-y-0' : 'translate-y-full'
//         }`}
//         style={{
//           maxHeight: isFilterBarOpen ? '100vh' : '0', // Control height during animation
//         }}
//       >
//         {isFilterBarOpen && <Filters />}
//       </div>
//     </div>
//   );
// };

// export default Try;

// "use client";
