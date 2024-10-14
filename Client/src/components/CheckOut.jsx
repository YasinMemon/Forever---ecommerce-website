import React, { useState } from "react";
import CartSummary from "./CartSummary";
import DeliveryForm from "./DeliveryForm";
import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";
import axios from "axios";

function CheckOut() {
  const items = useSelector((state) => state.cart.cart);
  const Amount = useSelector((state) => state.cart.totalAmount);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const orderData = {
    firstName: formData.fname,
    lastName: formData.lname,
    email: formData.email,
    street: formData.street,
    city: formData.city,
    state: formData.state,
    zipcode: formData.zipcode,
    country: formData.country,
    phone: formData.phone,
    items,
    Amount,
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://forever-ecommerce-website.vercel.app/api/orders/newOrder",
        orderData
      );
      console.log(response.data);
    } catch (error) {
      console.error("error while submitting the form", error);
    }
  };
  return (
    <div className="w-[75vw] mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div>
        <DeliveryForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
      <div>
        <CartTotals handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default CheckOut;
