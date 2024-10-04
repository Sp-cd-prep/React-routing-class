import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from './Components/Dashboard';
import UserDeatails from './Components/UserDeatails';
import User from './Components/User';
import Card from './Components/Card';

const RoutesFile = () => {
  return (

    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          
          <Route path='/user/:id' element={<UserDeatails/>}/>
          <Route path='/user/:id/card' element={<Card/>}/>

        </Routes>
      </Router>
  )
}

export default RoutesFile