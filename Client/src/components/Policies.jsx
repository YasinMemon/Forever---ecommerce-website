import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

function Policies() {
  return (
    <div className='w-[90vw] md:w-[75vw] mx-auto my-16 md:my-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {/* Easy Exchange Policy */}
      <div className="exchange mx-auto text-center font-bold">
        <MdCurrencyExchange className='text-5xl mx-auto mb-4 text-center' />
        <h3 className='text-lg md:text-base'>Easy Exchange Policy</h3>
        <p className='text-sm md:text-base'>We offer hassle-free exchange policy</p>
      </div>

      {/* 7 Days Return Policy */}
      <div className="replacement mx-auto text-center font-bold">
        <TbReplaceFilled className='text-5xl mx-auto mb-4 text-center' />
        <h3 className='text-lg md:text-base'>7 Days Return Policy</h3>
        <p className='text-sm md:text-base'>We provide 7 days free return policy</p>
      </div>

      {/* Best Customer Support */}
      <div className="support mx-auto text-center font-bold">
        <MdOutlineSupportAgent className='text-5xl mx-auto mb-4 text-center' />
        <h3 className='text-lg md:text-base'>Best Customer Support</h3>
        <p className='text-sm md:text-base'>We provide 24/7 Customer Support</p>
      </div>
    </div>
  );
}

export default Policies;
