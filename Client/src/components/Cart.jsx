import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/slices/cartSlice';
import CartSummary from './CartSummary';

function Cart() {
  const items = useSelector((state) => state.cart.cart);
  const amount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const addItem = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="sm:w-[75vw] w-[90vw] mx-auto px-4">
      {/* Display items in the cart */}
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="border-b py-4">
            <div className="sm:grid sm:grid-cols-4 md:grid-cols-7 sm:gap-4 items-center">

              {/* Product Image and Name for smaller screens */}
              <div className="sm:col-span-1 flex items-center gap-4 sm:gap-6">
                <img
                  src={item.img}
                  className="h-20 w-32 sm:w-20 object-cover rounded-lg"
                  alt={item.name}
                />
                <div className="flex flex-col sm:hidden w-full">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">₹{item.price}</p>
                    <span className="font-bold bg-gray-100 px-4 py-2 rounded-md">
                      {item.size.replace(/[\[\]]+/g, '')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Details for larger screens */}
              <div className="col-span-2 md:col-span-3 hidden sm:block">
                <h1 className="font-bold text-lg">{item.name}</h1>
                <p className="text-sm text-gray-500 mt-2">{item.desc.slice(0, 100)}...</p>
              </div>

              {/* Price & Size for larger screens */}
              <div className="text-center col-span-1 hidden sm:block">
                <p className="font-bold text-xl text-gray-700 mb-2">₹{item.price}</p>
                <span className="font-bold bg-gray-100 px-4 py-2 rounded-md">
                  {item.size.replace(/[\[\]]+/g, '')}
                </span>
              </div>

              {/* Quantity Controls */}
              <div className="flex justify-between items-center sm:col-span-1 sm:flex sm:items-center sm:justify-center">
                <button
                  className="bg-slate-300 px-3 py-1 text-xl font-bold rounded-md hover:bg-gray-400 transition"
                  onClick={() => removeItem(item)}
                >
                  −
                </button>
                <p className="px-2 text-lg">{item.qty}</p>
                <button
                  className="bg-slate-300 px-3 py-1 text-xl font-bold rounded-md hover:bg-gray-400 transition"
                  onClick={() => addItem(item)}
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <div className="sm:col-span-1 sm:flex justify-center hidden">
                <button
                  className="font-bold text-2xl text-red-600 hover:text-red-800 transition"
                  onClick={() => removeItem(item)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-2xl text-gray-600 mt-8">
          <h1>No Items Available</h1>
          {/* You can add an image or an icon here */}
          <img src="/empty-cart.svg" alt="Empty Cart" className="mx-auto mt-4 w-32" />
        </div>
      )}

      {/* Cart Summary Section */}
      {items.length > 0 && (
        <div className="mt-5 flex justify-end">
          <CartSummary total={amount} />
        </div>
      )}
    </div>
  );
}

export default Cart;
