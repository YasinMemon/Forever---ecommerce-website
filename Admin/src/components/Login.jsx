import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in both email and password");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/admin",
        { email, password }
      );

      if (response.data.message === true) {
        setToken(response.data.adminToken);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={formSubmitHandler}
        className="ring-1 ring-black p-2 px-4 rounded-lg h-80 md:w-96 shadow-black drop-shadow-2xl shadow-xl"
      >
        <p className="mb-5 font-bold text-center text-xl">Admin Login</p>

        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          className="ring-1 w-full ring-black py-1 mb-4"
          required
        />

        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <div className="relative">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={showPassword ? "text" : "password"}
            name="password"
            id="pword"
            className="ring-1 w-full ring-black py-1 mb-4"
            required
          />
          <p
            onClick={togglePasswordVisibility}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
          >
            {showPassword ? "Hide" : "Show"}
          </p>
        </div>

        <div className="submit text-center py-4">
          <input
            className="font-bold cursor-pointer bg-black text-white px-10 py-2 rounded-xl"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
