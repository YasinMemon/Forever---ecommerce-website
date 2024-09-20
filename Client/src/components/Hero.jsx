import React from 'react';

function Hero() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[77%] mx-auto ring-1 ring-black">
        <div className="leftSide font-serif text-center md:w-1/2 space-y-4">
          <h3 className="font-bold text-lg md:text-xl ">----OUR BESTSELLERS</h3>
          <h1 className="font-bold text-3xl md:text-5xl leading-relaxed">Latest Arrivals</h1>
          <h3 className="font-bold text-sm md:text-xl">SHOP NOW----</h3>
        </div>
        <div className="rightSide mt-6 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img
            className="h-40 md:h-80 w-full"
            src="hero_img-DOCOb6wn.png"
            alt="Latest Arrivals"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
