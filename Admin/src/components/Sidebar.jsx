import React from 'react'
import { IoAddCircle } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return <div className="border-r h-[86vh] border-black">
    <NavLink
       to='/add'
       className="remoe cursor-pointer flex items-center my-6 ml-20 border pr-20 pl-2 border-black py-3 gap-2"
       >
        <IoAddCircle/>
        <p>Add Items</p>
        </NavLink>
      <NavLink
       to='/list'
       className="remoe cursor-pointer flex items-center my-6 ml-20 border pr-20 pl-2 border-black py-3 gap-2"
       >
        <FaClipboardList/>
        <p>List Items</p>
      </NavLink>
      <NavLink
       to='/orders'
       className="remoe cursor-pointer flex items-center my-6 ml-20 border pr-20 pl-2 border-black py-3 gap-2"
       >
        <FaClipboardList/>
        <p>Orders</p>
      </NavLink>
    </div>
  
}

export default Sidebar
