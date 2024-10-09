import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

function Policies() {
  return (
    <div className='w-[75vw] mx-auto my-32 flex overflow-x-hidden'>
    <div className="exchange mx-auto text-center font-bold">
      <MdCurrencyExchange className='text-5xl text-center w-full'/>
        <h3 className='text-base'>Easy Exchange Policy</h3>
        <p>We offer hassle free exchange policy</p>
    </div>
    <div className="replacement mx-auto text-center font-bold">
    <TbReplaceFilled className='text-5xl text-center w-full'/>
        <h3 className='text-base'>7 Days Return Policy</h3>
        <p>We provide 7 days free return policy</p>
    </div>
    <div className="support mx-auto text-center font-bold">
    <MdOutlineSupportAgent className='text-5xl text-center w-full'/>
        <h3 className='text-base'>Best Customer Support</h3>
        <p>We provide 24/7 Customer Support</p>
    </div>
    </div>
  )
}

export default Policies
