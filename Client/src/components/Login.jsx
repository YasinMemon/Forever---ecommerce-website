import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [currentPage, setCurrentPage] = useState("login");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [email, setEmail] = useState("");

  const currentPageHandler = () => {
    currentPage === "login" ? setCurrentPage("signup") : setCurrentPage("login");
  };

  const inputClear = () => {
    setEmail("");
    setName("");
    setConfirmation("");
    setPassword("");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    inputClear();
    const url =
      currentPage === "login"
        ? "https://forever-ecommerce-website.onrender.com/api/user/login"
        : "https://forever-ecommerce-website.onrender.com/api/user/register";

    try {
      const response = await axios.post(url, { name, email, password });

      if (response.data.success) {
        if (currentPage === "signup") {
          setCurrentPage("login");
          toast.success("Signup successful, please login");
        } else {
          setToken(response.data.authToken);
          toast.success("Login successful");
        }
        inputClear();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={loginHandler}
      className="w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[50vw] h-auto flex justify-center items-center mx-auto bg-pink-50 p-4 sm:p-6 lg:p-10 border-1 rounded-md"
    >
      <div className="ring-1 w-full sm:w-auto ring-black flex flex-col bg-pink-100 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
        <h1 className="text-lg sm:text-xl font-bold font-serif mb-4">
          {currentPage === "login" ? "Login to your account" : "Create your account"}
        </h1>

        {/* Name input (visible only in signup) */}
        {currentPage === "signup" && (
          <>
            <label htmlFor="name" className="font-serif mt-2">
              Enter your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-pink-200 ring-1 ring-black text-base px-2 py-2 rounded-sm border-none outline-none"
              required
              type="text"
              id="name"
            />
          </>
        )}

        {/* Email input */}
        <label htmlFor="email" className="font-serif mt-2">
          Enter your Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-pink-200 ring-1 ring-black text-base px-2 py-2 rounded-sm border-none outline-none"
          type="email"
          required
          id="email"
        />

        {/* Password input */}
        <label htmlFor="password" className="font-serif mt-2">
          {currentPage === "login" ? "Enter your Password" : "Create a Strong Password"}
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-pink-200 ring-1 ring-black text-base px-2 py-2 rounded-sm border-none outline-none"
          type="password"
          required
          id="password"
        />

        {/* Confirm password (visible only in signup) */}
        {currentPage === "signup" && (
          <>
            <label htmlFor="confirm" className="font-serif mt-2">
              Confirm your Password
            </label>
            <input
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              className="w-full bg-pink-200 ring-1 ring-black text-base px-2 py-2 rounded-sm border-none outline-none"
              type="password"
              required
              id="confirm"
            />
          </>
        )}

        {/* Switch between login/signup */}
        <div className="auth flex justify-start gap-2 items-center mt-4">
          <p className="text-sm">
            {currentPage === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <p
            onClick={currentPageHandler}
            className="text-sm text-blue-600 cursor-pointer"
          >
            {currentPage === "login" ? "Signup" : "Login"}
          </p>
        </div>

        {/* Submit button */}
        <input
          className="w-full bg-gray-400 mt-6 cursor-pointer text-base py-2 rounded-sm border-none outline-none"
          type="submit"
          value={currentPage === "login" ? "Login" : "Signup"}
        />
      </div>
    </form>
  );
}

export default Login;
