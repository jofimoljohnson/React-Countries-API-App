import React, {Component,useState} from 'react'
import { Link,useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [input,setInput] = useState({
        email:"",
        password:"",
      })

      const handleLogin =(e)=>{
        e.preventDefault()
        const loggeduser =JSON.parse(localStorage.getItem("user"))
        if(input.email===loggeduser.email && input.password ===loggeduser.password)
        {
            localStorage.setItem("loggedin",true)
            navigate('/home')

        }else{
            alert("Wrong Email or Password ")
        }
      }

    
  return (
    <div>
        <form className='auth-wrapper' onSubmit={handleLogin}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
           name="email"
           value={input.email}
           onChange={(e )=>setInput({...input,[e.target.name]:e.target.value})}
 
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
           onChange={(e )=>setInput({...input,[e.target.name]:e.target.value})}
 
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
       
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </div>
        <p className="link text-right">
        {/* Have already an account? <a href="/sign-up">sign up</a> */}
        Have already an account? <Link to="/">sign up</Link>

        </p>
      </form>
    </div>
  )
}

export default Login