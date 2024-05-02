import React from 'react';
import axios from "axios";
import  { useState } from "react";
import { loginContext } from "./loginContext";

function UserLoginStore({children}) {

    let[currentUser,setCurrentUser]=useState({})
    let[LoginError,setLoginError]=useState("");
    const [userLoginStatus,setUserLoginStatus]=useState(false);
    
    
    const logoutUser=()=>{
       
        localStorage.clear()
        setUserLoginStatus(false)
   
    }
    
    
    const loginUser=(userCredObj)=>{
    
            axios
            .post(" https://login-authentication-deploy.vercel.app/api/user-login",userCredObj)
            .then((response)=>{
                if(response.data.message==="success"){
                    //navigate to user-profile
                    console.log("navigated to user profile");
    
                    localStorage.setItem("token",response.data.token)
                    setCurrentUser({...response.data.user});
                    setLoginError("");
                    setUserLoginStatus(true);
                     console.log(response.data.name);
                }
                else{
                //console.log("login failed",err);
                  setLoginError(response.data.message);
                }
            })
          .catch(err=>{
                console.log("err in user login",err);
                setLoginError(err.message)
            })
}

return(
    <loginContext.Provider value={[currentUser,LoginError,userLoginStatus,loginUser,logoutUser]}>
        {children}
    </loginContext.Provider>
)
}
export default UserLoginStore;
