import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-[90vw] mx-auto flex flex-col md:flex-row justify-between my-10 space-y-8 md:space-y-0 md:space-x-8'>
        
        {/* Left Side */}
        <div className="leftSide w-full md:w-1/3">
          <img
            src="/logo.png"
            alt="FOREVER"
            className="h-10 cursor-pointer my-4"
          />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, tempora veniam. Officia mollitia earum alias cupiditate aut, repellendus facilis accusamus minus voluptatum aliquid animi quod sequi accusantium eos quia quibusdam.
          </p>
        </div>

        {/* Center Side */}
        <div className="centerSide font-serif w-full md:w-1/3">
          <h1 className='text-xl font-bold my-4'>Company</h1>
          <ul className='space-y-2'>
            <li className='text-gray-600 cursor-pointer hover:underline'>Home</li>
            <li className='text-gray-600 cursor-pointer hover:underline'>About Us</li>
            <li className='text-gray-600 cursor-pointer hover:underline'>Delivery</li>
            <li className='text-gray-600 cursor-pointer hover:underline'>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="rightSide w-full md:w-1/3">
          <h1 className='my-4 font-bold text-xl'>Get In Touch</h1>
          <ul className='space-y-2'>
            <li className='text-gray-600'>+1-000-000-0000</li>
            <li className='text-gray-600'>greatstackdev@gmail.com</li>
            <li className='text-gray-600 cursor-pointer hover:underline'>Instagram</li>
          </ul>
        </div>
      </div>
      
      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Copyright */}
      <p className='text-center py-4 text-gray-500'>
        Copyright 2024@ <span className='font-bold text-black'>Yasin Memon</span> - All Rights Reserved
      </p>
    </>
  );
}

export default Footer;
