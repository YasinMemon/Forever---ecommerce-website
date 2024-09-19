import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='mx-40 hidden md:flex justify-between items-center'>
    <img src="/logo.png"
         alt="FOREVER" 
         className='h-10 mt-4'
    />
    <nav>
        <ul className='flex gap-6 mt-4 items-center'>
            <li>HOME</li>
            <li>COLLECTION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li><button className='ring-1 ring-black text-sm px-4 py-2 rounded-full'>Admin Panel</button></li>
        </ul>
    </nav>
    <div className="icons flex mt-4 gap-6 text-3xl">
         <CiSearch />
         <IoMdPerson/>
         <IoBagOutline/>
    </div>
    </div>
  )
}

export default Navbar
