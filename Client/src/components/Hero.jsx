import React from 'react';

function Hero() {
  return (
    <div className="container mx-auto px-4 mt-10 overflow-hidden">
      {/* Main container */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[77%] mx-auto ring-1 ring-black">

        {/* Left side (Text section) */}
        <div className="leftSide font-serif text-center md:text-left md:w-1/2 space-y-4 p-4 md:p-0">
          <h3 className="font-bold text-lg md:text-xl">----OUR BESTSELLERS</h3>
          <h1 className="font-bold text-3xl md:text-5xl leading-tight md:leading-relaxed">
            Latest Arrivals
          </h1>
          <h3 className="font-bold text-sm md:text-xl">SHOP NOW----</h3>
        </div>

        {/* Right side (Image section) */}
        <div className="rightSide mt-6 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img
            className="h-40 md:h-80 w-full object-contain"
            src="hero_img-DOCOb6wn.png"  // Replace with your actual image path
            alt="Latest Arrivals"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
