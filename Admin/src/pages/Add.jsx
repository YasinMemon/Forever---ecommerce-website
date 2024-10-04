import React, { useState } from "react";

function Add() {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <form className="bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl mx-auto">
        <p className="mb-4 font-bold text-lg">Upload Images</p>
        <div className="imagesUpload grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[img1, img2, img3, img4].map((img, index) => (
            <div key={index} className="relative ring-1 ring-gray-300 flex justify-center items-center rounded-lg overflow-hidden">
              <label className="cursor-pointer" htmlFor={`image${index + 1}`}>
                <img
                  className="w-20 h-20 object-cover"
                  src={img ? URL.createObjectURL(img) : './images-removebg-preview.png'}
                  alt={`Image ${index + 1}`}
                />
                <input
                  onChange={(e) => {
                    const handlers = [setImg1, setImg2, setImg3, setImg4];
                    handlers[index](e.target.files[0]);
                  }}
                  type="file"
                  id={`image${index + 1}`}
                  hidden
                />
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-semibold" htmlFor="productName">Product Name:</label>
          <input
            className="w-full ring-1 ring-gray-300 p-2 rounded-md outline-none focus:ring focus:ring-indigo-500"
            type="text"
            id="productName"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-semibold" htmlFor="productDescription">Product Description:</label>
          <textarea
            className="w-full ring-1 ring-gray-300 p-2 rounded-md outline-none focus:ring focus:ring-indigo-500"
            id="productDescription"
            rows="4"
            placeholder="Enter product description"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block mb-1 font-semibold">Product Category:</label>
            <select className="w-full ring-1 ring-gray-300 p-2 rounded-md outline-none focus:ring focus:ring-indigo-500">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Sub Category:</label>
            <select className="w-full ring-1 ring-gray-300 p-2 rounded-md outline-none focus:ring focus:ring-indigo-500">
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Price:</label>
            <input
              className="w-full ring-1 ring-gray-300 p-2 rounded-md outline-none focus:ring focus:ring-indigo-500"
              type="number"
              placeholder="₹20"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Product Sizes:</p>
          <div className="flex gap-2 flex-wrap">
            {["S", "M", "L", "X", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="py-2 px-4 bg-gray-100 text-sm font-semibold rounded-lg cursor-pointer hover:bg-indigo-300 transition"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="bestseller"
            className="w-5 h-5"
          />
          <label htmlFor="bestseller" className="font-semibold">Add to Bestseller</label>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-bold hover:bg-indigo-700 transition"
          >
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
