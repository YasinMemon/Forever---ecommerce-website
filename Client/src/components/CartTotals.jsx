import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function CartTotals({ handleSubmit }) {
  const total = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <div className="w-full sm:w-80 rounded bg-slate-200 px-6 py-5">
        <p className="font-mono font-bold text-xl">Cart Totals</p>
        <div className="subtotal flex justify-between mt-2">
          <p>Subtotal:</p>
          <p>₹{total}</p>
        </div>
        <hr />
        <div className="shipping flex justify-between mt-2">
          <p>Shipping Fee:</p>
          <p>₹26</p>
        </div>
        <hr />
        <div className="total flex justify-between mt-2 font-bold">
          <p>Total:</p>
          <p>₹{total + 26}</p>
        </div>
        <div className="payments mt-4">
          <p className="font-bold">Select Payment Method</p>
        </div>
        <div className="submit mt-6 text-right">
          {/* <form onSubmit={handleSubmit} > */}
            <button 
            onClick={handleSubmit}
            type="submit" className="uppercase bg-black text-white font-bold px-4 py-2 rounded">
              Place order
            </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default CartTotals;
