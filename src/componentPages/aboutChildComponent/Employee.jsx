import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Employee = () => {
  return (<>
    <div className='employee'>Employee</div>
 
    <NavLink to="contactEmployee" className='nav-item'>contactEmployee</NavLink>
    <NavLink to="regEmployee" className='nav-item'>RegEmployee</NavLink>
    <Outlet/>



   
   </>
  )
}

export default Employee