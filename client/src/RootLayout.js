import React from 'react'
import NavBar from "./components/navigationbar/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";

function RootLayout() {
  return (
    <div>

      <div>
            <NavBar/>
      </div> 
   
      <div className="body-container">
            <Outlet/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  
  )
}

export default RootLayout