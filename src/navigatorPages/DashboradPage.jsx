import React from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const DashboradPage = () => {
  

    let navigator=useNavigate();
    let location=useLocation();


    console.log(location);
 
  return (
    <>
    
   <center><h1>Navigation hook</h1></center> 
   <nav>
   
        <p>to navigate to - <button onClick={()=>navigator("/home")}>Home</button></p>
        <p>to navigate to - <button onClick={()=>navigator("/about")}>about</button></p>
        <p>to navigate to - <button onClick={()=>navigator("/contact")}>contact</button></p>
        <p>to previous page- <button onClick={()=>navigator(-1)}>🔙</button></p>
        <p>to previous page- <button onClick={()=>navigator(+1)}>⏩</button></p>

        
        
      
    </nav>
       
    <Outlet/>
        
    </>
    
      )
}

export default DashboradPage