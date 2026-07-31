import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
  <div className='Footer' id='footer'>
      <div className='Footer_container'>
        <div className='Footer_container__left'>
          <img src={assets.logo} alt="logo" />
          <p>Your trusted food delivery partner. Order fresh meals from top restaurants with quick delivery, affordable prices, and exceptional service</p>
          <div className='Footer-Social-Icons'>
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />

          </div>
        </div>
        <div className='Footer_container_Center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delevery</li>
            <li>Private Policy</li>
          </ul>
        </div>
        <div className='Footer_container_right'>
          <h2>GIT IN TUCH</h2>
          <ul>
            <li>Address: Okhla Delhi India</li>
            <li>Phone: +91 7310706911</li>
            <li>Email: info@tomatosite.com</li>
          </ul>
        </div>
      </div>
      < hr className='hr-line' />
      <p className="Footer-copyright">Copyright 2026 © Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
