import React, {useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu , setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}><a href="#home">Home</a></li>
        <li onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}><a href="#about">Menu</a></li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}><a href="#services">Mobile App</a></li>
        <li onClick={() => setMenu("contact")} className={menu==="contact"?"active":""}><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="nav-buttons">
        <img src={assets.search_icon} alt="search" className="nav-icon" />
          <div className="search-icons">
            <img src={assets.basket_icon} alt="basket" className="nav-icon" />
            <div className="dot"></div>
          </div>
          <button className="sign-in">Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
