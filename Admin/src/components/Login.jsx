import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'

function Login({ setToken }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();    
    const response = await axios.post('http://localhost:4000' + '/api/user/admin', {email, password});
    console.log(response);
    

    if(response.data.message === true){
      setToken(response.data.adminToken);
    }else{
      toast.error(response.data.message);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form 
      onSubmit={formSubmitHandler}
      className='ring-1 ring-black p-2 px-4  rounded-lg h-80 md:w-96 shadow-black drop-shadow-2xl shadow-xl'
      >
        <p className='mb-5 font-bold text-center text-xl'>Admin Login</p>
        <br />
        <label 
        htmlFor="email"
        className='font-bold'
        >Email</label>
        <br />
        <input
        onChange={(e) => setEmail(e.target.value)}
        name='email' 
        type="text" 
        className='ring-1 w-full ring-black py-1'
        />
        <br />
        <br />
        <label htmlFor="password" className='font-bold'>Password</label>
        <input 
        onChange={(e) => setPassword(e.target.value)}
        type="password" 
        name="password" 
        id="pword" 
        className='ring-1 w-full ring-black py-1' />
        <br />
        <br />
        <div className="submit text-center py-4">
        <input
        className='font-bold cursor-pointer bg-black text-white px-10 py-2 rounded-xl text-center'
        type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Login
