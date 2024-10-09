import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from "./pages/Add";
import List from "./pages/List";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);
  
  return <> <ToastContainer/>
  {token === "" ? (
    <Login setToken={setToken} />
  ) : (
    <>
      <Navbar setToken={setToken} />
      <div className="flex">
        <Sidebar />
        <div className="forms">
          <Routes>
            <Route path="/" element={<Add token={token} />}/>
            <Route path="/list" element={<List token={token} />} />
          </Routes>
        </div>
      </div>
    </>
  )};
    </>
}
