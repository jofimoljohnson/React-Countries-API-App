import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import { useState } from 'react';

function SignUp() {

  const navigate = useNavigate()

  const [input,setInput] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleSubmit =(e)=>{
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify(input))
    navigate("/sign-in")
  }


  return (
    <div>
      <form className='auth-wrapper' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Your name</label>
          <input
            name="name"
            value={input.name}
            onChange={(e )=>setInput({...input,[e.target.name]:e.target.value})}
  
            type="text"
            className="form-control"
            placeholder="Your name"
          />
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
           name="email"
           value={input.email}
           onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
 
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
          name="password"
          value={input.password}
          onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}

            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="link text-right">
          Already registered <Link to="/sign-in">sign in?</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp