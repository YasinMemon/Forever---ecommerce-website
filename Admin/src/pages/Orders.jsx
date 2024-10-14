import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

function Orders({ token }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Orders
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://forever-ecommerce-website.vercel.app/api/orders/show",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load orders.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-2xl font-bold text-center my-6 text-indigo-600">
        All Orders
      </p>

      {/* Loading and Error Messages */}
      {loading && <p>Loading orders...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Table Header */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 justify-items-center bg-gray-100 py-3 border-b-[2px] font-semibold border-gray-400 w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[1200px] rounded-md">
        <p className="text-center">Product</p>
        <p className="text-center hidden sm:inline-block">Customer</p>
        <p className="text-center">Size</p>
        <p className="text-center">Status</p>
        <p className="text-center">Actions</p>
      </div>

      {/* Product Orders */}
      <div className="flex flex-col gap-4 mt-4 w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[1200px]">
        {orders?.map((item) => (
          <div
            className="grid grid-cols-4 sm:grid-cols-5 items-center bg-white shadow-md rounded-lg p-4 gap-4"
            key={item._id}
          >
            <div className="flex justify-center">
              <p>{item.items.name}</p>
            </div>
            <div className="text-center flex justify-center md:text-left overflow-hidden">
              <p className="font-medium text-xs sm:text-lg text-indigo-700 truncate">
                {item.firstName}
              </p>
            </div>
            <div className="text-center hidden sm:flex justify-center md:text-left overflow-hidden">
              <p className="text-gray-600 line-clamp-2">{item.size}</p>
            </div>
            <div className="text-center">
              <p
                className={`py-1 px-1 rounded-lg font-bold ${
                  item.status === "Accepted"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {item.status}
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to={`/order-details/${item._id}`} // Link to the details page
                className="bg-blue-500 text-white py-1 px-3 rounded-lg font-bold hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
