'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';

const colors = [
  { id: 1, name: 'Green', hex: '#00C12B' },
  { id: 2, name: 'Red', hex: '#F50606' },
  { id: 3, name: 'Yellow', hex: '#F5DD06' },
  { id: 4, name: 'Orange', hex: '#F57906' },
  { id: 5, name: 'Cyan', hex: '#06CAF5' },
  { id: 6, name: 'Blue', hex: '#063AF5' },
  { id: 7, name: 'Purple', hex: '#7D06F5' },
  { id: 8, name: 'Pink', hex: '#F506A4' },
  { id: 9, name: 'White', hex: '#FFFFFF' },
  { id: 10, name: 'Black', hex: '#000000' },
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  const handleColorClick = (id: number) => {
    setSelectedColor(id);
  };

  return (
    <div>
      <div className="flex justify-center items-center max-sm:hidden">
        <div className="w-[247px] border-[1px] border-[#0000001A]" />
      </div>

      {/* Colors Section */}
      <div className="flex justify-between md:px-6 md:my-5">
        <p className="font-satoshi font-bold text-[20px] max-sm:pl-6">Colors</p>
        <Image src="/Icons/up.svg" alt="filter-icons" height={12} width={12} />
      </div>
      
      <div className="ml-5 md:my-4">
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <div
              key={color.id}
              onClick={() => handleColorClick(color.id)}
              style={{
                width: '37px',
                height: '37px',
                borderRadius: '50%',
                backgroundColor: color.hex,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                border: selectedColor === color.id ? '3px solid #00000033' : '2px solid #ccc',
              }}
            >
              {selectedColor === color.id && (
                <span style={{ color: 'white', fontWeight: 'bold' }}>✓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;