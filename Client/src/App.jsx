import CollectionPage from "./components/CollectionPage.jsx";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return <>

    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} ></Route>
        <Route path="/collections" element={<CollectionPage/>}></Route>
      </Routes>
    <Footer/>
    </Router>
    
    
    </>
}