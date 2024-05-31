import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Nav = () => {
  return (
     <nav>
        {/* <Link className='nav-item' to="/home" >Home</Link>
        <Link className='nav-item' to="/about">About</Link>
        <Link className='nav-item'to="/contact">Contact</Link>
        <Link className='nav-item' to="/login">Login</Link> */}
        {/*css present in index.css*/ }
        <NavLink to={"/home"} className='nav-item' >Home</NavLink>
        <NavLink to={"/about"}className='nav-item' >About</NavLink>
        <NavLink to={"/contact"} className='nav-item' >Contact</NavLink>
        <NavLink to={"/login"} className='nav-item' >Login</NavLink>
      

     </nav>
  )
}

export default Nav