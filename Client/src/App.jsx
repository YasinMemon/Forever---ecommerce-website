import CollectionPage from "./components/CollectionPage.jsx";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import CheckOut from "./components/CheckOut.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') || "");

  useEffect(() => {
    localStorage.setItem("userToken", token);
  }, [token]);
  return <> <ToastContainer/>

    <Router>
    <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Main token={token} setToken={setToken} />} ></Route>
        <Route path="/collections" element={<CollectionPage/>}></Route>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    <Footer/>
    </Router>
    
    
    </>
}