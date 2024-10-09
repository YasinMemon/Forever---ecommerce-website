import React from 'react'

function DeliveryForm({ formData,handleInputChange }) {
  return (
    <form className='flex flex-col w-[40vw] py-14 px-6'>
      <h1 className='font-bold text-xl mb-4'>Delivery Information...</h1>
        <div className='flex gap-4'>
        <input 
        onChange={handleInputChange}
        className='  pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='first name'
        name='fname'
        type="text" />
        <input 
        onChange={handleInputChange}
        name='lname'
        className='  pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='last name'
        type="text" />
        </div>
        <input 
        onChange={handleInputChange}
        name='email'
        className='w-full mx-auto  mt-2 outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='email address'
        type="email" />
        <input 
        onChange={handleInputChange}
        name='street'
        className='w-full   mt-2 outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='Street'
        type="text" />
        <div className="flex gap-4 mt-2">
        <input 
        onChange={handleInputChange}
        name='city'
        className='pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='City'
        type="text" />
        <input 
        onChange={handleInputChange}
        name='state'
        className='  pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='State'
        type="text" />
        </div>
        <div className="flex gap-4 mt-2">
        <input 
        onChange={handleInputChange}
        name='zipcode'
        className='  pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='Zipcode'
        type="number" />
        <input 
        onChange={handleInputChange}
        name='country'
        className='pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='Country'
        type="text" />
        </div>
        <input 
        onChange={handleInputChange}
        name='phone'
        className='mt-2   pl-1 w-full outline-none border-none bg-slate-200 text-lg rounded my-1 px-2 h-10'
        placeholder='phone'
        type="number" />
    </form>
  )
}

export default DeliveryForm
