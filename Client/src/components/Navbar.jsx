import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar({token, setToken}) {
  const [isOpen, setIsOpen] = useState(false);
  const qty = useSelector((state) => state.cart.qty);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:w-[74vw] mx-auto px-4 flex justify-between items-center py-4 relative">
      <img
        src="/logo.png"
        alt="FOREVER"
        className="h-10 cursor-pointer"
      />
      
      {/* Hamburger Icon for mobile/tablet */}
      <div className="md:hidden text-3xl cursor-pointer z-20" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>

      {/* Navbar Links */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 cursor-pointer md:gap-6 items-center text-center absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <li><NavLink onClick={() => setIsOpen((prev) => !prev)}
          className={`${((isActive) => isActive ? 'underline' : 'underline')}`}
          to="/" >HOME</NavLink></li>
          <li><NavLink onClick={() => setIsOpen((prev) => !prev)}
          className={`${((isActive) => isActive ? 'underline' : '')}`}
          to={`${token ? '/collections' : '/'} `} >COLLECTION</NavLink></li>
          <li><NavLink onClick={() => setIsOpen((prev) => !prev)}
          className={`${((isActive) => isActive ? 'underline' : '')}`}
          to={`${token ? '/about' : '/'} `} >ABOUT</NavLink></li>
          <li><NavLink onClick={() => setIsOpen((prev) => !prev)}
          className={`${((isActive) => isActive ? 'underline' : '')}`}
          to={`${token ? '/contact' : '/'} `} >CONTACT US</NavLink></li>
          <li className='hidden md:block'><button className="ring-1 ring-black text-sm px-4 py-2 rounded-full">
              Admin Panel
            </button></li>
          <li>
            <div className="icons cursor-pointer flex justify-center items-center md:hidden text-3xl gap-3">
            <IoMdPerson />
            <button className="ring-1 ring-black text-sm px-4 py-2 rounded-full">
              Admin Panel
            </button>
            <NavLink to='/cart' onClick={() => setIsOpen(!isOpen)}>
            <IoBagOutline  />
            </NavLink>
            </div>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className={`${isOpen ? 'flex' : 'hidden md:flex'} icons gap-4 md:gap-6 text-2xl md:text-3xl absolute md:static top-16 right-4 md:top-auto`}>
        <CiSearch />
        <div className="group relative">
        <IoMdPerson className='cursor-pointer' />
        <div className="group-hover:block hidden absolute dropdown-menu right-1 pt-4 text-center">
          <div className={`${token ? 'flex' : 'hidden'}  flex-col gap-2 w-36 justify-center items-center py-3 px-5 text-gray-500 rounded text-sm bg-slate-100`}>
          <p className='cursor-pointer hover:text-black'>My Profile</p>
          <p className='cursor-pointer hover:text-black'>My Orders</p>
          <p className='cursor-pointer hover:text-black' onClick={() => setToken("")} >Logout</p>
          </div>
        </div>
        </div>
        <NavLink to='/cart'>
        <IoBagOutline className=' absolute' />
        <div className='bg-green-400 flex relative top-3 left-2 justify-center items-center rounded-full text-xs w-4 h-4' >{qty}</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
