import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Login({ setToken }) {
  const [currentPage, setCurrentPage] = useState("login");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confimation, setConfirmation] = useState("");
  const [email, setEmail] = useState("");

  const currentPageHandler = ({ setToken }) => {
    currentPage === "login"
      ? setCurrentPage("signup")
      : setCurrentPage("login");
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
          toast.success("signup successfull, please login");
        } else {
          setToken(response.data.authToken);
          toast.success("login successfull");
        }
        inputClear();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <form
      onSubmit={loginHandler}
      className="w-[85vw] sm:w-[75vw] h-[75vh] flex justify-center items-center mx-auto bg-pink-50 border-1 rounded-md"
    >
      <div className="ring-1 w-full sm:w-auto ring-black flex flex-col bg-pink-100 p-4 sm:p-10 rounded-lg shadow-xl shadow-black">
        <h1 className="text-xl font-bold font-serif mb-4">
          Create your account
        </h1>
        <label
          htmlFor="name"
          className={`${
            currentPage === "login" ? "hidden" : ""
          } font-serif mt-2`}
        >
          Enter your Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${
            currentPage === "login" ? "hidden" : ""
          } sm:w-[22vw] bg-pink-200 ring-1 ring-black text-lg pl-1 rounded-sm border-none outline-none`}
          required={currentPage === "signup"}
          type="name"
          id="name"
        />
        <label htmlFor="email" className="font-serif mt-2">
          Enter your Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sm:w-[22vw] bg-pink-200 ring-1 ring-black text-lg pl-1 rounded-sm border-none outline-none"
          type="email"
          required
          id="email"
        />
        <label htmlFor="password" className="font-serif mt-2">
          {currentPage === "login"
            ? "Enter your password"
            : "Craate strong password"}
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="sm:w-[22vw] bg-pink-200 ring-1 ring-black text-lg pl-1 rounded-sm border-none outline-none"
          type="password"
          required
          id="password"
        />
        <label
          htmlFor="confirm"
          className={`${
            currentPage === "login" ? "hidden" : ""
          } font-serif mt-2`}
        >
          Confirm password
        </label>
        <input
          value={confimation}
          onChange={(e) => setConfirmation(e.target.value)}
          className={`${
            currentPage === "login" ? "hidden" : ""
          } sm:w-[22vw] bg-pink-200 ring-1 ring-black text-lg pl-1 rounded-sm border-none outline-none`}
          type="password"
          required={currentPage === "signup"}
          id="confirm"
        />
        <div className="auth flex justify-start gap-2 items-center mt-1">
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
        <input
          className="w-[22vw] bg-gray-400 mt-4 cursor-pointer text-lg pl-1 rounded-sm border-none outline-none"
          type="submit"
        />
      </div>
    </form>
  );
}

export default Login;
