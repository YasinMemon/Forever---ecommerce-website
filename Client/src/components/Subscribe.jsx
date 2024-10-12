import React from 'react';

function Subscribe() {
  return (
    <div className='w-[90vw] md:w-[75vw] mx-auto text-center my-12'>
      <h1 className='text-xl md:text-2xl font-bold'>Subscribe now & get 20% off</h1>
      <p className='text-sm md:text-base my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae aliquam quia, perferendis.</p>
      
      <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <input 
          className='ring-1 ring-black px-4 py-3 w-full md:w-80 text-sm md:text-base'
          placeholder='Enter your email'
          type="text" 
        />
        <button className='bg-black text-white ring-1 ring-black py-3 px-6 w-full md:w-auto'>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
