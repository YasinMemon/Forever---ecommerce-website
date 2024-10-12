import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/slices/cartSlice';
import { toast } from 'react-toastify';

function Product() {
  const location = useLocation();
  const item = location.state;

  const [imgs, setImgs] = useState(item.img);
  const [mainImg, setMainImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();

  const addHandler = (item) => {
    if (!selectedSize) {
      return toast.error("Please select a size");
    }

    const itemWithSize = { ...item, size: selectedSize };
    toast.success(`${item.name.slice(0, 10)} successfully added to cart`);
    dispatch(addToCart(itemWithSize));
  };

  return (
    <>
      <main className="sm:mx-40 sm:flex gap-10 w-full overflow-x-hidden">

        {/* Image Gallery */}
        <div className="allImages flex flex-col-reverse sm:flex-row sm:gap-5 gap-2 overflow-x-hidden">
          {/* Thumbnail Images */}
          <div className="subImages flex sm:inline-block">
            {imgs.map((img, idx) => (
              <img
                key={idx}
                className="h-24 mb-2 min-w-24 object-cover object-top cursor-pointer border p-1 border-gray-300 rounded-md hover:border-black"
                src={img}
                alt={`thumbnail-${idx}`}
                onClick={() => setMainImg(idx)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="mainImage">
            <img
              className="h-[25.5rem] w-full sm:min-w-64 object-cover"
              src={item.img[mainImg]}
              alt={item.name}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="itemData mt-5 w-[42rem] overflow-x-hidden">
          <p className="font-bold text-[1.35rem]">{item.name}</p>
          <div className="mt-4 font-bold flex gap-1 text-xl">
            <p>₹</p><p>{item.price}</p>
          </div>
          <p className="mt-2 text-gray-600">{item.desc}</p>

          {/* Size Selection */}
          <div className="sizes mt-6">
            <p className="mb-4 text-pretty font-mono font-semibold pl-4">Select size</p>
            <div className="flex gap-2">
              {item.sizes.map((size) => (
                <span
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`${
                    selectedSize === size ? 'bg-pink-300' : 'bg-slate-300'
                  } px-10 py-2 ring-1 cursor-pointer ring-black rounded-sm mx-1 transition-colors hover:bg-pink-200`}
                >
                  {size.replace(/[\[\]"]/g, ' ').trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="add mt-4">
            <button
              onClick={() => addHandler(item)}
              className="px-10 uppercase bg-black text-white py-2 rounded-sm ring-1 ring-black mx-1 transition-all hover:bg-gray-900"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
