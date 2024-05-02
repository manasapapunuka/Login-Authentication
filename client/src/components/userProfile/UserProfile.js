import React from 'react';
import "./UserProfile.css";
import {useContext} from "react";
import { loginContext } from '../../contexts/loginContext';
import  avatar from "../../images/avatar.jpg";
import avatarb from "../../images/avatarb.png";
import avatarO from "../../images/avatarO.jpg";

function UserProfile() {

  let[currentUser,LoginError,userLoginStatus,loginUser,logoutUser]=useContext(loginContext)

  const picture=()=>{
     console.log(" in user profile",currentUser,currentUser.dob,currentUser.gender,currentUser.name);
    if(currentUser.gender==="male"){
      return <img src={avatarb} alt="" className='user-img'></img>
    }
    else if(currentUser.gender==="female"){
      return <img src={avatar} alt="" className='user-img'></img>
    }
    else{
      return <img src={avatarO} alt="" className='user-img'></img>
    }
  }


  return (
    <div> 
           <div className="user-profile-container">
                  
                  <div className='user-profile-card'>
                   
                   <div className="user-img-container">{picture()}</div>

                      <div className="user-details">
                            <p> Welcome, {currentUser.name} </p>
                            <p className="user-email">{currentUser.email}</p>
                            <p className="user-dob">{currentUser.dob}</p>
                            <p className="user-dob">{currentUser.gender}</p>
                            
                      </div>
                  </div>
                 
          </div>
          <p className='display-3 text-center mb-5 fw-bold register-head'>"Remember to log out before you go! Keep your account secure. Thanks!"</p>
      </div>


  )
}

export default UserProfile;
