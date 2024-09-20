import React from 'react';

function Collections({ children }) {
  return (
    <div className='md:w-[74vw] mx-auto'>
      {/* Heading */}
      <div className="heading justify-center font-bold font-serif mt-8 text-3xl flex gap-2 items-center">
        {children} ---
      </div>
      <p className='mx-auto text-center text-sm max-w-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corrupti inventore obcaecati fugit exercitationem.
      </p>

      {/* Collection Grid */}
      <div className="collection my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="card w-full p-4 bg-white shadow-lg rounded-md">
            <img 
              className='h-60 w-full object-cover rounded-md'
              src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" 
              alt="Kid Tapered Slim Fit Trouser" 
            />
            <h4 className='font-sans mt-2 text-center'>Kid Tapered Slim Fit Trouser</h4>
            <span className="block text-center text-lg font-semibold mt-1">₹34</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
