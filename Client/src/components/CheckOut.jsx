import React, { useState } from 'react'
import CartSummary from './CartSummary'
import DeliveryForm from './DeliveryForm'
import CartTotals from './CartTotals'

function CheckOut() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    number: ''
  });
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  }
  return (
    <div className='w-[75vw] mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <div>
            <DeliveryForm formData={formData} handleInputChange={handleInputChange} />
        </div>
        <div>
            <CartTotals handleSubmit={handleSubmit} />
        </div>
    </div>
  )
}

export default CheckOut
