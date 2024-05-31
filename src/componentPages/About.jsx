import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const About = () => {
  return (<>
    <center><div className='about'> Display About page Component</div>
  

    <NavLink to={'company'} className='nav-item' >Company </NavLink>
    <NavLink to={'Employee'} className='nav-item' >Employee </NavLink>

    <NavLink to={'user'} className='nav-item'  >User </NavLink>
    <Outlet/> 
 
     </center>
    </>
  )
}

export default About