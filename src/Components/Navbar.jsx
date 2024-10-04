import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
       <li><NavLink to='/' style={({isActive})=>({color:isActive ? "black":"white" })}>Home</NavLink>  </li>
       <li><NavLink to='/about' style={({isActive})=>({color:isActive ? "black":"white" })}>About</NavLink></li>
       <li><NavLink to='/contact' style={({isActive})=>({color:isActive? "black":"white"})} >Contact</NavLink></li>
       <li><NavLink to='/user' style={({isActive})=>({color:isActive? "black":"white"})} state={"home"} >User</NavLink></li>
      </ul>
    </nav>
    </>
    )
}

export default Navbar