import React from 'react'

function Subscribe() {
  return (
    <div className='w-[75vw] mx-auto text-center'>
      <h1 className='text-2xl font-bold'>Subscribe now & get 20% off</h1>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae aliquam quia, perferendis </p>
      <input 
      className='ring-1 ring-black my-4 px-2 py-3 w-80'
      placeholder='Enter your email'
      type="text" 
      />
      <button className='bg-black text-white ring-1 ring-black py-3 px-4'>Subscribe</button>
    </div>
  )
}

export default Subscribe
