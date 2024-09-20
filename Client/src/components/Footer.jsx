import React from 'react'

function Footer() {
  return <>
    <div className='w-[75vw] mx-auto flex justify-between my-10'>
      <div className="leftSide w-96">
      <img
        src="/logo.png"
        alt="FOREVER"
        className="h-10 cursor-pointer my-4"
      />      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, tempora veniam. Officia mollitia earum alias cupiditate aut, repellendus facilis accusamus minus voluptatum aliquid animi quod sequi accusantium eos quia quibusdam.</p>
      </div>
      <div className="centerSide font-serif">
        <h1 className='text-xl font-bold my-4'>Company</h1>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privicy Policy</li>
        </ul>
      </div>
      <div className="rightSide">
        <h1 className='my-4 font-bold text-xl'>Get In Touch</h1>
        <ul>
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li>Instagram</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className='text-center py-4'>Copyright 2024@  <span className='font-bold'>Yasin Memon</span> - All Rights Reserved</p>
    </>
}

export default Footer
