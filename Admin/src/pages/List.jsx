import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'

function List({ token }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get("http://localhost:4000/api/products/list");
    setList(response.data.products);
  };

  const removeItem = async (id) => {  
    try {
      const response = await axios.post(
        "http://localhost:4000/api/products/remove", 
      { id },
      {headers: {Authorization: `Bearer ${token}`}});
      toast.success(response.data.message);
      fetchList();
    } catch (error) {
      console.log(error);
    }
    await fetchList();
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-2xl font-bold text-center my-6 text-indigo-600">All Products List</p>

      {/* Table Header */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 justify-items-center bg-gray-100 py-3 border-b-[2px] font-semibold border-gray-400 w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[1200px] rounded-md">
        <p className="text-center">Image</p>
        <p className="text-center">Name</p>
        <p className="text-center hidden sm:inline-block">Description</p>
        <p className="text-center">Category</p>
        <p className="text-center">Action</p>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-4 mt-4 w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[1200px]">
        {list.map((item) => {
          return (
            <div
              className="grid grid-cols-4 sm:grid-cols-5 items-center bg-white shadow-md rounded-lg p-4 gap-4"
              key={item._id}
            >
              <div className="flex justify-center">
                <img
                  className="h-20 w-20 object-cover rounded-lg border border-gray-300"
                  src={item.images[0]}
                  alt={item.name}
                />
              </div>
              <div className="text-center  md:text-left overflow-hidden">
                <p className="font-medium text-xs sm:text-lg text-indigo-700 truncate">{item.name}</p>
              </div>
              <div className="text-center hidden sm:inline-block md:text-left overflow-hidden">
                <p className="text-gray-600 line-clamp-2">{item.description}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">{item.category}</p>
              </div>
              <div className="flex justify-center">
                <button 
                onClick={() => removeItem(item._id)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg font-bold hover:bg-red-600 transition">
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
