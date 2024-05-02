import React from 'react';
import "./Login.css";
import {useForm} from 'react-hook-form';
import { useContext,useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext } from "../../contexts/loginContext";
import UserProfile from "../userProfile/UserProfile";
import { SlLogin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";


function Login() {

  
  let{register,handleSubmit,formState:{errors}}=useForm()

  let[currentUser,LoginError,userLoginStatus,loginUser]=useContext(loginContext)

    //navigate
    const navigate=useNavigate();

      useEffect(()=>{
        if(userLoginStatus===true){
          navigate("/userProfile");
        }
      },[userLoginStatus])



  let submitForm=(userCredObj)=>{
    console.log(userCredObj);
    loginUser(userCredObj)
  }

  
  return (
 
    <div className="container-fluid login-wrapper">
      <div className='login-container'>
        <div className='login-head'>
            <div className='login-head-text'>Login</div>
            <div><SlLogin /></div>
        </div>
      </div>
      
      <p className="login-error">{LoginError}</p>


    <div className="row">
       <div className="col-9 col-sm-7 col-md-5 mx-auto">

          <form onSubmit={handleSubmit(submitForm)}>
            
                <div>
                  <label htmlFor="email">Email</label> 
                  <CiMail />      
                  <input type="email" id="email" className="form-control mb-3" {...register("email",{required:true})}></input>
                </div>
                
                <div>
                  <label htmlFor="password">Password</label>  
                  <RiLockPasswordLine />
                  <input type="password" id="password" className="form-control mb-3" {...register("password",{required:true})}/>
                </div>
                <button type="submit" className="login-btn mb-3">Login</button>

          </form>
       </div>
    </div>
  </div>
  )
}

export default Login