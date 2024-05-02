import "./Register.css";
import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Register() {

  let[error,setError]=useState("");
  let navigate=useNavigate();
  let {register,handleSubmit,formState:{errors}}=useForm();

  let registerfun=(newUser)=>{
    console.log(newUser)
   
    axios.post("login-authentication-deploy.vercel.app/user-api/user-signup",newUser)
    .then((response)=>{
    console.log("response is:",response);

      if(response.status===201){
        //navigate to login component
        setError("");
        navigate("/login");
      }
      if(response.status!==201){
        setError(response.data.message)
      }
    })
  //   .catch(err=>{
  //     console.log("err is",err)
  //     //the client was given an error response
  //    if(err.response){
  //     setError(err.message);
  //    }
  //    //the client never received response
  //    else if(err.request){
  //     setError(err.message);
      
  //    }
  //    //for other errors
  //    else{
  //     setError(err.message);
      
  //    }
  //  }
  
   .catch(err => {
    if (err.response && err.response.data) {
      // Handle error response from server
      setError(err.response.data.message);
    } else if (err.request) {
      // Handle error where client never received a response
      setError("Network error. Please try again later.");
    } else {
      // Handle other errors
      setError("An error occurred. Please try again later.");
    }
  })


  }



  return (
    <div className="container-fluid register-wrapper">
      <p className="display-3 text-center mb-5 fw-bold register-head">Sign up</p>

      {error.length!==0 && <p className='display-3 text-center text-danger fs-6'>{error}</p>}
   
      <div className="row">
         <div className="col-11 col-sm-8 col-md-6 mx-auto">

            <form onSubmit={handleSubmit(registerfun)}>
              <div className="mb-3">
                  
                  <div className="label-container">
                      <label htmlFor="name">Name</label>
                      {/*validation error for name */}
                      {errors.name?.type==='required' && <p className="text-danger fw-bold ">*required</p>}
                  </div>

                   <input type="text" id="name" className="form-control mb-3" {...register("name",{required:true})}/>
               
                  
                <div className="label-container">
                    <label htmlFor="email">Email</label>
                    {/*validation error for name */}
                    {errors.name?.type==='required' && <p className="text-danger fw-bold ">*required</p>}
                </div>
                  <input type="email" id="email" className="form-control mb-3" {...register("email",{required:true})}/>
                  
                  
                  <div className="label-container">
                      <label htmlFor="password">Password</label>
                      {/*validation error for name */}
                      {errors.name?.type==='required' && <p className="text-danger fw-bold ">*required</p>}
                  </div>
                  <input type="password" id="password" className="form-control mb-3" {...register("password",{required:true})}/>


                  <div className="label-container">
                      <label htmlFor="gender">Gender</label>
                      {errors.name?.type==='required' && <p className="text-danger fw-bold ">*required</p>}
                  </div>

                    <div className="gender-container mb-3">
                      
                          <label>
                            <input type="radio"  value="male" {...register("gender")} />
                            Male
                          </label>

                          <label>
                            <input type="radio"  value="female"  {...register("gender")} />
                            Female
                          </label>
                          
                          <label>
                            <input type="radio"  value="others" {...register("gender")} />
                            Others
                          </label>
                    </div>




                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" className="form-control mb-3" {...register("dob")}/>
              
                  <button type="submit" className="btn-btn-success register-btn mb-3">Register</button>

              </div>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Register;
