import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"; // To get the order ID from the URL

function OrderDetails({ token }) {
  const { id } = useParams(); // Get the order ID from URL params
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch the specific order details
  const fetchOrderDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://forever-ecommerce-website.vercel.app/api/orders/order/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }, // Add token to the request
        }
      );
      setOrder(response.data.order); // Assuming the response contains an `order` field
      setLoading(false);
    } catch (error) {
      setError("Failed to load order details.");
      setLoading(false);
    }
  };

  // Accept order
  const handleAccept = async () => {
    try {
      // Assuming the backend API accepts the order
      await axios.post(
        `https://forever-ecommerce-website.vercel.app/api/orders/accept/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Order accepted!");
      setOrder({ ...order, status: "Accepted" });
    } catch (error) {
      toast.error("Failed to accept the order.");
    }
  };

  // Decline order
  const handleDecline = async () => {
    try {
      // Assuming the backend API declines the order
      await axios.post(
        `https://forever-ecommerce-website.vercel.app/api/orders/decline/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.error("Order declined!");
      setOrder({ ...order, status: "Declined" });
    } catch (error) {
      toast.error("Failed to decline the order.");
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  if (loading) return <p>Loading order details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center my-6 text-indigo-600">
        Order Details
      </h2>

      {order && (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          {/* Display the product name from the first item in the `items` array */}
          <p>
            <strong>Product:</strong> {order.items[0]?.name}
          </p>

          {/* Display customer information */}
          <p>
            <strong>Customer:</strong> {order.firstName} {order.lastName}
          </p>
          <p>
            <strong>Email:</strong> {order.email}
          </p>
          <p>
            <strong>Address:</strong> {order.street}, {order.city},{" "}
            {order.state} - {order.zipcode}
          </p>
          <p>
            <strong>Phone:</strong> {order.phone}
          </p>

          {/* Display the product size */}
          <p>
            <strong>Size:</strong> {order.items[0]?.size}
          </p>

          {/* Display order amount */}
          <p>
            <strong>Amount:</strong> ${order.Amount}
          </p>

          {/* Display order status */}
          <p>
            <strong>Status:</strong> {order.status}
          </p>

          {/* Display order date */}
          <p>
            <strong>Order Date:</strong>{" "}
            {new Date(order.orderDate).toLocaleString()}
          </p>

          {/* Accept and Decline Buttons */}
          <div className="mt-4 flex justify-around">
            <button
              onClick={handleAccept}
              className="bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 transition"
              disabled={order.status === "Accepted"}
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition"
              disabled={order.status === "Declined"}
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
