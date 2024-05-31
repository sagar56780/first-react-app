import React from 'react'
import { Outlet } from 'react-router-dom'
import CommonNavBar from "./Nav"

const Layout = () => {
  return (
    <>
    <header > 
      Header part
    </header>
    <nav>
    
    </nav>
    <main>
       <CommonNavBar/>
      <Outlet></Outlet>
     
    </main>
    <footer style={{border: "solid blue", height:"50px"}}>
      Footer part 
    </footer>
   
    </>
  )
}

export default Layout;