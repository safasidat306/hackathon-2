'use client'; 

import React, { useState } from 'react';
import Header from '../components/header/header';
import Filters from '../components/Filters/filters';
import Pro from '../components/products/pro'; 
import Footer from '../components/footer/footer';

const Page = () => {
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const handleFilterClose = () => {
    setIsFilterBarOpen(false); 
  };

  return (
    <section id="men">
    <div>
      <Header />
      <div className="flex md:flex-row max-sm:flex-col md:px-6 md:gap-4">
        <div className="max-sm:hidden">
          <Filters onClose={handleFilterClose} /> 
        </div>
        <div>
          <Pro setIsFilterBarOpen={setIsFilterBarOpen} /> 
        </div>
      </div>
      <br /><br />
      <Footer />
    </div>
     </section>
  );
};

export default Page;

