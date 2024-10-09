import React from 'react'
import { IoAddCircle } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return <div className="border-r h-[86vh] border-black">
    <NavLink
       to='/'
       className="remoe cursor-pointer sm:mr-4 flex items-center my-6 sm:ml-20 sm:border sm:pr-20 pl-2 pr-2 border-black py-3 gap-2"
       >
        <IoAddCircle/>
        <p className='hidden sm:block'>Add Items</p>
        </NavLink>
      <NavLink
       to='/list'
       className="remoe cursor-pointer sm:mr-4 flex items-center my-6 sm:ml-20 sm:border sm:pr-20 pl-2 pr-2 border-black py-3 gap-2"
       >
        <FaClipboardList/>
        <p className='hidden sm:block'>List Items</p>
      </NavLink>
      <NavLink
       to='/orders'
       className="remoe cursor-pointer sm:mr-4 flex items-center my-6 sm:ml-20 sm:border sm:pr-20 px-2 border-black py-3 gap-2"
       >
        <FaClipboardList/>
        <p className='hidden sm:block'>Orders</p>
      </NavLink>
    </div>
  
}

export default Sidebar
