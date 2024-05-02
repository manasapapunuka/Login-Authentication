import "./NavBar.css";
import React from 'react';
import {NavLink} from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

//import userimg from "./userimg.jpg";
import logo from "../../images/logo.jpg";
import { useContext } from 'react';
import { loginContext } from '../../contexts/loginContext';



function NavBar() {

  let[currentUser,LoginError,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)


    const activeLink={
      color:"red",
      fontSize:"1.2rem",
      fontWeight:"bold"
    };
    const inactiveLink={
      color:"white",
      fontSize:"1.2rem",
      fontWeight:"bold"
    };
  
    return (
    <nav className="navbar navbar-expand-sm">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={logo} width="50px" height="50px" alt="problem to load image"/>
      </a>
  
     <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
       >
        <span className='navbar-toggler-icon'></span>
      </button>
  
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
        <ul className="navbar-nav ms-auto mb-5 mb-lg-3 ">

          
        <li className="nav-item">
            <NavLink className="nav-link" 
             style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }}
            to="/">
              <AiOutlineHome className='home-icon'/>
              Home
            </NavLink>
          </li> 

          <li className="nav-item">
            <NavLink className="nav-link" 
             style={({isActive})=>{
              return isActive?activeLink:inactiveLink;
            }}
            to="/register">
              Register
            </NavLink>
          </li>  

  

          {userLoginStatus ?
        
        <li className="nav-item">
          <NavLink className="nav-link" 
            style={({isActive})=>{
            return isActive?activeLink:inactiveLink;
          }}
          to="/login"  onClick={logoutUser}>
            Logout
          </NavLink>
        </li> : 

        <li className="nav-item">
        <NavLink className="nav-link" 
        style={({isActive})=>{
            return isActive?activeLink:inactiveLink;
            }}
        to="/login">
          
            Login
        </NavLink>
        </li>   }
   
  
         
  
        </ul>   
      </div>
    </div>
  </nav>
    )
  }

export default NavBar