import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
     <nav>
        <Link className='nav-item' to="/home" >Home</Link>
        <Link className='nav-item' to="/about">About</Link>
        <Link className='nav-item'to="/contact">Contact</Link>
        <Link className='nav-item' to="/login">Login</Link>

     </nav>
  )
}

export default Nav