import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className='login-popup'>
      <form className='login-popup-Container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className="cross-icon" />
        </div>

        <div className='login-popup-inputs'>
          {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button className='login-popup-button'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className='login-popup-condition'>
          <input type="checkbox" className="login-checkbox" required />
          <p>Remember me</p>
        </div>
        {currentState === "Login"
          ? <p className="login-popup-link">Create the New Account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
          : <p className="login-popup-link">Already have an Account? <span onClick={() => setCurrentState("Login")}>login here</span></p>
        }


      </form>

    </div>
  )
}

export default LoginPopup
