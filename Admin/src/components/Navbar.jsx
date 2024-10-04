import React from "react";

function Navbar({ setToken }) {
  return <>
    <div className="flex items-center justify-between px-2 md:px-16">
      <div className="logo p-1 md:p-4">
        <img 
        className="font-bold w-20 md:w-40 h-8" 
        src="../logo.png" 
        alt="Forever" />
      <p className="text-pink-500 text-xs md:text-sm uppercase font-bold font-sans">admin panel</p>
      </div>
      <div className="logout">
        <button onClick={() => {setToken('')}} className="bg-slate-600 text-white px-4 md:px-8 py-1 md:py-2 rounded-xl">Logout</button>
      </div>
    </div>
    <hr />
    </>
}

export default Navbar;
